let SwordResult = document.querySelector('.num-click-text'),
	btnMainClick = document.querySelector('.main-click-img'),
	btnBlockSkill = document.querySelector('.up-block'),
	clickerCost = document.querySelector('.cost-price'),
	clickValueSkills = document.querySelector('.click-value'),
	skillLevel = document.querySelector('.skill-lvl');

//btn Menu

const btn1 = document.getElementById('btn1'),
	btn2 = document.getElementById('btn2'),
	btn3 = document.getElementById('btn3');

// Block 1 one click
let parsedPriceSword = parseFloat(clickerCost.innerHTML);
let valueUpgradeSkill = parseFloat(clickValueSkills.innerHTML);
let parseSword = parseFloat(SwordResult.innerHTML);

let count = 1;
// Block 2 resta
let restaPrice = document.querySelector('.resta-price'),
	restaValue = document.querySelector('.resta-value'),
	restaLvl = document.querySelector('.resta-lvl');

let parsedPriceResta = parseFloat(restaPrice.innerHTML);
let valueUpgradeResta = parseFloat(restaValue.innerHTML);

// Block 3 meseta
let mesetaPrice = document.querySelector('.meseta-price'),
	mesetaValue = document.querySelector('.meseta-value'),
	mesetaLvl = document.querySelector('.meseta-lvl');

let parsedPricemeseta = parseFloat(mesetaPrice.innerHTML);
let valueUpgrademeseta = parseFloat(mesetaValue.innerHTML);

// BTN event
btnMainClick.addEventListener('click', clickSword);

//Click Sword
// function clickSword() {
// 	parseSword.innerHTML = Math.round((parseSword += count));
// 	SwordResult.innerHTML = Math.round(parseSword);
// }

function upgradeClick() {
	if (parseSword >= parsedPriceSword) {
		SwordResult.innerHTML = Math.round((parseSword -= parsedPriceSword));

		skillLevel.innerHTML++;
		count += valueUpgradeSkill;
		parsedPriceSword *= 1.2;
		clickerCost.innerHTML = Math.round(parsedPriceSword);
	}
}

function upgradeResta() {
	if (parseSword >= parsedPriceResta) {
		SwordResult.innerHTML = Math.round((parseSword -= parsedPriceResta));

		restaLvl.innerHTML++;
		count += valueUpgradeResta;
		parsedPriceResta *= 1.2;
		restaPrice.innerHTML = Math.round(parsedPriceResta);
	}
}
function upgradeMeseta() {
	if (parseSword >= parsedPricemeseta) {
		SwordResult.innerHTML = Math.round((parseSword -= parsedPricemeseta));

		mesetaLvl.innerHTML++;
		count += valueUpgrademeseta;
		parsedPricemeseta *= 1.2;
		mesetaPrice.innerHTML = Math.round(parsedPricemeseta);
	}
}

function clickSword() {
	// Увеличиваем счетчик кликов
	parseSword += count;
	SwordResult.innerHTML = Math.round(parseSword);

	// Генерация случайного числа от 1 до текущего значения SwordResult
	let randomValue = Math.floor(Math.random() * parseSword) + 10000;

	// Сравнение случайного числа с текущим значением SwordResult
	if (randomValue === parseSword) {
		addRandomElement();
	}
}

function addRandomElement() {
	const newElement = document.createElement('div');
	const newElement2 = document.createElement('div');

	newElement.className = 'item-block-all';
	newElement2.className = 'item-r';

	function getRandomClickValue() {
		let randomClickValue = Math.floor(Math.random() * 100);
		return randomClickValue;
	}

	function getRandomPhoto() {
		const imagesArray = [
			'Img-item/1.png',
			'Img-item/2.png',
			'Img-item/3.png',
			'Img-item/4.png',
		]; // Массив с именами файлов изображений

		const nameArray = ['omni', 'katana', 'Yni', 'Spacestorm', 'Rakita Dance'];
		let randomNumber = Math.floor(Math.random() * imagesArray.length);
		let randomName = Math.floor(Math.random() * nameArray.length);

		newElement2.innerHTML = `
            <img
                src="${imagesArray[randomNumber]}"
                alt=""
                class="up-img"
                draggable="false"
                style="border-radius: 40px"
            />
            <h3>${nameArray[randomName]}</h3>
            <p>Click: <span class="item-value">${getRandomClickValue()}</span></p>
        `;
	}

	getRandomPhoto();

	// Добавляем элемент в конец контейнера с классом all-item
	const container = document.querySelector('.all-cont-skills2');
	if (container) {
		container.appendChild(newElement);
		container.appendChild(newElement2);

		// Назначаем обработчик события после добавления элемента на страницу
		newElement2.addEventListener('click', function handleItemClick() {
			// Проверяем, уже использовался ли этот элемент
			if (!newElement2.classList.contains('used')) {
				let itemPrice = newElement2.querySelector('.item-value');
				if (itemPrice) {
					let itemParsedPrice = parseFloat(itemPrice.innerHTML);
					count += itemParsedPrice;

					// Помечаем элемент как использованный
					newElement2.classList.add('used');
				}
			}
		});
	}
}

function getRandomValueItem() {
	let itemPrice = document.querySelector('.item-value');
	if (itemPrice) {
		let itemParsedPrice = parseFloat(itemPrice.innerHTML);
		count += itemParsedPrice;
	}
}

// Функция переключения видимости блоков
function switchBlock(event) {
	event.preventDefault();

	// Убираем класс "active" со всех кнопок
	document
		.querySelectorAll('.btn-skills')
		.forEach(btn => btn.classList.remove('active'));

	// Добавляем класс "active" к текущей нажатой кнопке
	event.target.classList.add('active');

	// Скрываем все блоки
	document.getElementById('block-skills').style.display = 'none';
	document.getElementById('block-item').style.display = 'none';
	document.getElementById('block-info').style.display = 'none';

	// Показать нужный блок в зависимости от нажатой кнопки
	if (event.target.id === 'btn-skills') {
		document.getElementById('block-skills').style.display = 'block';
	} else if (event.target.id === 'btn-item') {
		document.getElementById('block-item').style.display = 'block';
	} else if (event.target.id === 'btn-info') {
		document.getElementById('block-info').style.display = 'block';
	}
}

// Добавляем обработчики событий для кнопок переключения блоков
document.getElementById('btn-skills').addEventListener('click', switchBlock);
document.getElementById('btn-item').addEventListener('click', switchBlock);
document.getElementById('btn-info').addEventListener('click', switchBlock);
