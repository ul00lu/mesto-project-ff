import './pages/index.css';
import {
	profileEditButton,
	editProfileForm,
	profileImage,
	popapAddCardButton,
	popapAddCard,
	cardsContainer,
	newPlaceForm,
	placeNameInput,
	placeLinkInput,
	popapAvatr,
	formAvatar,
	imageAvatarInput,
	popupTypeImage,
	popupImage,
	popupCaption,
	popupTypeEdit,
	ptofileTitle,
	profileDescription,
	nameInput,
	jobInput,
	editProfileFormButton,
	formAvatarButton,
	newPlaceFormButton,
} from './modules/elements.js';
import { getUserInfo, getInitialCards, patchAvatarProfile, postNewCard, patchUserInfo } from './modules/api.js';
import { openPopap, closePopap, escHandler, closePopapHandler } from './modules/popap.js';
import { enableValidation, clearValidation, toggleButtonState } from './modules/validation.js';
import { createCard, removeCard, toggleLike } from './modules/card.js';
import { buttonLoading } from './modules/utils.js';
// ===================

// ==============

// Добавление крточки
function addCard(data, userId) {
	const card = createCard(data, userId, removeCard, toggleLike, openImagePopup);
	cardsContainer.prepend(card);
}

// Открытие картинки карточки
function openImagePopup(evt) {
	const cardImage = evt.target;
	const cardDescription = cardImage.closest('.card').querySelector('.card__title');
	openPopap(popupTypeImage);
	popupImage.src = cardImage.src;
	popupImage.alt = cardImage.alt;
	popupCaption.textContent = cardDescription.textContent;
}

// Запросы
Promise.all([getUserInfo(), getInitialCards()])
	.then(([dataProfile, dataCards]) => {
		const userId = dataProfile._id;
		ptofileTitle.textContent = dataProfile.name;
		profileDescription.textContent = dataProfile.about;
		profileImage.style.backgroundImage = `url(${dataProfile.avatar})`;

		dataCards.forEach(cardElement => {
			addCard(cardElement, userId);
		});
	})
	.catch(err => console.log(`Ошибка: ${err}`));

//Редактирование профиля(кнопка,форма)
function handleEditProfileFormSubmit(evt) {
	evt.preventDefault();
	const valueNameInput = nameInput.value;
	const valueJobInput = jobInput.value;
	buttonLoading(editProfileFormButton, true);
	patchUserInfo(valueNameInput, valueJobInput)
		.then(data => {
			ptofileTitle.textContent = data.name;
			profileDescription.textContent = data.about;
			closePopap(popupTypeEdit);
		})
		.catch(error => {
			console.error('Ошибка при обновлении данных:', error);
		})
		.finally(() => {
			buttonLoading(editProfileFormButton, false);
		});
}

profileEditButton.addEventListener('click', function () {
	openPopap(popupTypeEdit);
	nameInput.value = ptofileTitle.textContent;
	jobInput.value = profileDescription.textContent;

	clearValidation(editProfileForm, validationConfig);
});

popupTypeEdit.addEventListener('click', function (evt) {
	closePopapHandler(evt, popupTypeEdit);
});

editProfileForm.addEventListener('submit', handleEditProfileFormSubmit);

//Создание карточки,форма и взаимодействме с карточкой
function handleNewCardFormSubmit(evt) {
	evt.preventDefault();
	const placeName = placeNameInput.value;
	const placeLink = placeLinkInput.value;

	buttonLoading(newPlaceFormButton, true);
	postNewCard(placeName, placeLink)
		.then(data => {
			addCard(data, data.owner._id);
			closePopap(popapAddCard);
			placeNameInput.value = '';
			placeLinkInput.value = '';

			clearValidation(newPlaceForm, validationConfig);
		})
		.catch(err => console.error(`Ошибка запроса: ${err}`))
		.finally(() => {
			buttonLoading(newPlaceFormButton, false);
		});
}

popapAddCardButton.addEventListener('click', function () {
	openPopap(popapAddCard);
	toggleButtonState([placeNameInput, placeLinkInput], newPlaceFormButton, validationConfig);
});

popapAddCard.addEventListener('click', function (evt) {
	closePopapHandler(evt, popapAddCard);
});

newPlaceForm.addEventListener('submit', evt => {
	handleNewCardFormSubmit(evt);
});

//Аватар профиля
function handleAvatarUpdate(evt) {
	evt.preventDefault();
	const avatarLink = imageAvatarInput.value;

	buttonLoading(formAvatarButton, true);
	patchAvatarProfile(avatarLink)
		.then(data => {
			profileImage.style.backgroundImage = `url('${data.avatar}')`;
			closePopap(popapAvatr);
		})
		.catch(err => {
			console.error('Ошибка при обновлении аватара:', err);
		})
		.finally(() => {
			buttonLoading(formAvatarButton, false);
		});
}

profileImage.addEventListener('click', () => {
	openPopap(popapAvatr);
	clearValidation(formAvatar, validationConfig);
	imageAvatarInput.value = '';
});

popapAvatr.addEventListener('click', function (evt) {
	closePopapHandler(evt, popapAvatr);
});

formAvatar.addEventListener('submit', handleAvatarUpdate);

//Взаимодействие с карточкой
popupTypeImage.addEventListener('click', function (evt) {
	closePopapHandler(evt, popupTypeImage);
});

// Валидация всех форм

const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible',
};

enableValidation(validationConfig);
