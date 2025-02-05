import { initialCards } from './cards.js';
import './pages/index.css'; // добавьте импорт главного файла стилей
import { openPopap, closePopap, closePopapButton, escHandler, overlayHandler } from './modules/popap.js';
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
import { handleEditProfileFormSubmit } from './modules/EditProfile.js';

profileEditButton.addEventListener('click', function () {
	openPopap(popupTypeEdit);
	nameInput.value = ptofileTitle.textContent;
	jobInput.value = profileDescription.textContent;
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
});

popapAddCard.addEventListener('click', function (evt) {
	overlayHandler(evt, popapAddCard);
	closePopapButton(evt, popapAddCard);
});

newPlaceForm.addEventListener('submit', handleNewCardFormSubmit);

//Взаимодействие с карточкой
import { popupTypeImage, popupImage, popupCaption } from './modules/elements.js';
import { addCard } from './modules/addCard.js';

popupTypeImage.addEventListener('click', function (evt) {
	closePopapButton(evt, popupTypeImage);
	overlayHandler(evt, popupTypeImage);
});

initialCards.forEach(element => {
	addCard(element);
});
