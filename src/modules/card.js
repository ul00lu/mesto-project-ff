import { cardTemplate, popupTypeImage, popupImage, popupCaption, cardsContainer } from './elements';

export function createCard(cardData, removeCard, toggleLike, openImagePopup) {
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

export function removeCard(evt) {
	evt.target.closest('.card').remove();
}

export function toggleLike(evt) {
	evt.target.classList.toggle('card__like-button_is-active');
}
