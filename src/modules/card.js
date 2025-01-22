import { cardTemplate, popupTypeImage, popupImage } from './elements';
import { openPopap, closePopapButton, escHandler, overlayHandler } from './popap';
export function createCard(firstInput, secondInput) {
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
	const likeButton = cardElement.querySelector('.card__like-button');
	const cardImage = cardElement.querySelector('.card__image');
	const cardDescription = cardElement.querySelector('.card__title');
	cardDescription.textContent = firstInput.value;
	cardImage.src = secondInput.value;
	cardImage.alt = 'Карточка';

	cardElement.querySelector('.card__delete-button').addEventListener('click', () => {
		removeCard(cardElement);
	});

	likeButton.addEventListener('click', () => {
		toggleLike(likeButton);
	});

	const popupTypeImage = document.querySelector('.popup_type_image');
	const popupImage = document.querySelector('.popup__image');
	const popupCaption = document.querySelector('.popup__caption');
	cardImage.addEventListener('click', function () {
		openPopap(popupTypeImage);
		popupImage.src = cardImage.src;
		popupCaption.textContent = cardDescription.textContent;
		document.addEventListener('keydown', escHandler);
	});

	popupTypeImage.addEventListener('click', function (evt) {
		closePopapButton(evt, popupTypeImage);
		overlayHandler(evt, popupTypeImage);
	});

	return cardElement;
}

function removeCard(card) {
	card.remove();
}

function toggleLike(button) {
	button.classList.toggle('card__like-button_is-active');
}
