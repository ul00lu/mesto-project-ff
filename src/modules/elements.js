// Карточка
export const cardTemplate = document.querySelector('#card-template').content;
export const popupTypeImage = document.querySelector('.popup_type_image');
export const popupImage = document.querySelector('.popup__image');
export const popupCaption = document.querySelector('.popup__caption');

//Форма для карточки
export const cardsContainer = document.querySelector('.places__list');
export const popapAddCardButton = document.querySelector('.profile__add-button');
export const popapAddCard = document.querySelector('.popup_type_new-card');

export const newPlaceForm = document.forms['new-place'];
export const placeNameInput = newPlaceForm['place-name'];
export const placeLinkInput = newPlaceForm.link;

export const newPlaceFormButton = newPlaceForm.querySelector('.popup__button');

// Редактирование профиля
export const profileEditButton = document.querySelector('.profile__edit-button');
export const popupTypeEdit = document.querySelector('.popup_type_edit');
export const editProfileForm = document.forms['edit-profile'];
export const editProfileFormButton = editProfileForm.querySelector('.popup__button');
export const ptofileTitle = document.querySelector('.profile__title');
export const profileDescription = document.querySelector('.profile__description');
export const nameInput = editProfileForm.name;
export const jobInput = editProfileForm.description;

//Аватар
export const popapAvatr = document.querySelector('.popup_type_avatar');
export const formAvatar = document.forms.avatar;
export const imageAvatarInput = formAvatar.avatarlink;
export const profileImage = document.querySelector('.profile__image');
export const formAvatarButton = formAvatar.querySelector('.popup__button');
