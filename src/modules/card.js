import { cardTemplate, popupTypeImage, popupImage, popupCaption, cardsContainer } from './elements';
import { openPopap, closePopapButton, escHandler, overlayHandler } from './popap';

export function createCard(cardData) {
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
	const likeButton = cardElement.querySelector('.card__like-button');
	const delateButton = cardElement.querySelector('.card__delete-button');
	const cardImage = cardElement.querySelector('.card__image');
	const cardDescription = cardElement.querySelector('.card__title');
	cardDescription.textContent = cardData.name;
	cardImage.src = cardData.link;
	cardImage.alt = cardData.name;

	delateButton.addEventListener('click', removeCard);

	likeButton.addEventListener('click', toggleLike);

	cardImage.addEventListener('click', openImagePopup);

	return cardElement;
}

function openImagePopup(evt) {
	const cardImage = evt.target;
	const cardDescription = cardImage.closest('.card').querySelector('.card__title');
	openPopap(popupTypeImage);
	popupImage.src = cardImage.src;
	popupCaption.textContent = cardDescription.textContent;
	document.addEventListener('keydown', escHandler);
}

function removeCard(evt) {
	evt.target.closest('.card').remove();
}

function toggleLike(evt) {
	evt.target.classList.toggle('card__like-button_is-active');
}

export function addCard(data) {
	const card = createCard(data);
	cardsContainer.prepend(card);
}
