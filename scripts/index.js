import { initialCards } from './scripts/cards.js';
// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardsContainer = document.querySelector('.places__list');
const addButton = document.querySelector('.profile__add-button');
// @todo: Функция создания карточки
function createCard(cardData) {
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
	const likeButton = cardElement.querySelector('.card__like-button');
	cardElement.querySelector('.card__title').textContent = cardData.name;
	cardElement.querySelector('.card__image').src = cardData.link;
	cardElement.querySelector('.card__image').alt = cardData.name;

	cardElement.querySelector('.card__delete-button').addEventListener('click', () => {
		removeCard(cardElement);
	});

	likeButton.addEventListener('click', () => {
		toggleLike(likeButton);
	});

	return cardElement;
}

function removeCard(card) {
	card.remove();
}

function toggleLike(button) {
	button.classList.toggle('card__like-button_is-active');
}

function addCard(data) {
	const card = createCard(data);
	cardsContainer.append(card);
}

initialCards.forEach(element => {
	addCard(element);
});
