// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const list = document.querySelector('.places__list');
const addButton = document.querySelector('.profile__add-button');
// @todo: Функция создания карточки
function addCard(name, link) {
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
	cardElement.querySelector('.card__title').textContent = name;
	cardElement.querySelector('.card__image').src = link;

	cardElement.querySelector('.card__delete-button').addEventListener('click', removeCard);

	list.append(cardElement);
}

function removeCard(evt) {
	evt.target.closest('.card').remove();
}

// for (let i = 0; i < initialCards.length; i += 1) {
// 	addCard(initialCards[i].name, initialCards[i].link);
// }
initialCards.forEach(element => {
	addCard(element.name, element.link);
});