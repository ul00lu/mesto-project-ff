import './pages/index.css'; // добавьте импорт главного файла стилей
import { openPopap, closePopap, closePopapButton, escHandler, overlayHandler } from './modules/popap.js';
import { createCard } from './modules/card.js';

//Редактирование профиля(кнопка,форма)
import {
	profileEditButton,
	popupTypeEdit,
	editProfileForm,
	ptofileTitle,
	profileDescription,
	nameInput,
	jobInput,
} from './modules/elements.js';
import { handleFormSubmit } from './modules/EditProfile.js';

profileEditButton.addEventListener('click', function () {
	openPopap(popupTypeEdit);
	document.addEventListener('keydown', escHandler);
	nameInput.value = ptofileTitle.textContent;
	jobInput.value = profileDescription.textContent;
});

popupTypeEdit.addEventListener('click', function (evt) {
	closePopapButton(evt, popupTypeEdit);
	overlayHandler(evt, popupTypeEdit);
});

editProfileForm.addEventListener('submit', handleFormSubmit);

//Создание карточки,форма и взаимодействме с карточкой

import {
	popapAddCardButton,
	popapAddCard,
	cardsContainer,
	newPlaceForm,
	placeNameInput,
	placeLinkInput,
} from './modules/elements.js';

import { validateAndSubmit } from './modules/newPlace.js';

popapAddCardButton.addEventListener('click', function () {
	openPopap(popapAddCard);
	document.addEventListener('keydown', escHandler);
});

popapAddCard.addEventListener('click', function (evt) {
	overlayHandler(evt, popapAddCard);
	closePopapButton(evt, popapAddCard);
});

newPlaceForm.addEventListener('submit', validateAndSubmit);

//====================================================
