import './pages/index.css';
import { openPopap, closePopap, closePopapButton, escHandler, overlayHandler } from './modules/popap.js';

// Запросы
import { getUserInfo, getInitialCards } from './modules/api.js';

Promise.all([getUserInfo(), getInitialCards()])
	.then(([dataProfile, dataCards]) => {
		ptofileTitle.textContent = dataProfile.name;
		profileDescription.textContent = dataProfile.about;
		profileImage.style.backgroundImage = `url(${dataProfile.avatar})`;

		dataCards.forEach(cardElement => {
			addCard(cardElement);
		});
	})
	.catch(err => console.log(`Ошибка: ${err}`));

//Редактирование профиля(кнопка,форма)
import {
	profileEditButton,
	popupTypeEdit,
	editProfileForm,
	ptofileTitle,
	profileImage,
	profileDescription,
	nameInput,
	jobInput,
} from './modules/elements.js';
import { handleEditProfileFormSubmit } from './modules/EditProfile.js';

profileEditButton.addEventListener('click', function () {
	openPopap(popupTypeEdit);
	nameInput.value = ptofileTitle.textContent;
	jobInput.value = profileDescription.textContent;

	clearValidation(editProfileForm, validationConfig);
});

popupTypeEdit.addEventListener('click', function (evt) {
	closePopapButton(evt, popupTypeEdit);
	overlayHandler(evt, popupTypeEdit);
});

editProfileForm.addEventListener('submit', handleEditProfileFormSubmit);

//Создание карточки,форма и взаимодействме с карточкой
import {
	popapAddCardButton,
	popapAddCard,
	cardsContainer,
	newPlaceForm,
	placeNameInput,
	placeLinkInput,
} from './modules/elements.js';

import { handleNewCardFormSubmit } from './modules/newPlace.js';

popapAddCardButton.addEventListener('click', function () {
	openPopap(popapAddCard);

	placeNameInput.value = '';
	placeLinkInput.value = '';

	clearValidation(newPlaceForm, validationConfig);
});

popapAddCard.addEventListener('click', function (evt) {
	overlayHandler(evt, popapAddCard);
	closePopapButton(evt, popapAddCard);
});

newPlaceForm.addEventListener('submit', evt => {
	handleNewCardFormSubmit(evt);
});

import { popapAvatr, formAvatar, imageAvatarInput } from './modules/elements.js';
import { handleAvatarUpdate } from './modules/avatarImage.js';

//Аватар профиля
profileImage.addEventListener('click', () => {
	openPopap(popapAvatr);
	clearValidation(formAvatar, validationConfig);
	imageAvatarInput.value = '';
});

popapAvatr.addEventListener('click', function (evt) {
	closePopapButton(evt, popapAvatr);
	overlayHandler(evt, popapAvatr);
});

formAvatar.addEventListener('submit', handleAvatarUpdate);

//Взаимодействие с карточкой
import { popupTypeImage, popupImage, popupCaption } from './modules/elements.js';
import { addCard } from './modules/addCard.js';

popupTypeImage.addEventListener('click', function (evt) {
	closePopapButton(evt, popupTypeImage);
	overlayHandler(evt, popupTypeImage);
});

// Валидация всех форм
import {
	isValid,
	showInputError,
	hideInputError,
	setEventListeners,
	enableValidation,
	toggleButtonState,
} from './modules/validation.js';

const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible',
};

enableValidation(validationConfig);

function clearValidation(formElement, validationConfig) {
	const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
	const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
	inputList.forEach(inputElement => {
		inputElement.setCustomValidity('');
		hideInputError(formElement, inputElement, validationConfig);
	});

	toggleButtonState(inputList, buttonElement, validationConfig);
}
