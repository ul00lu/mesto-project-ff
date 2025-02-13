export const config = {
	baseUrl: 'https://nomoreparties.co/v1/wff-cohort-31',
	headers: {
		authorization: '927df38c-ec41-4f82-ad33-036eaa56e876',
		'Content-Type': 'application/json',
	},
};

const checkResponse = res => {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(`Ошибка: ${res.status}`);
};

// получение информации о юзере с сервера
export const getUserInfo = () => {
	return fetch(`${config.baseUrl}/users/me`, {
		headers: config.headers,
	}).then(checkResponse);
};

// получение списка карточек с сервера
export const getInitialCards = () => {
	return fetch(`${config.baseUrl}/cards`, {
		headers: config.headers,
	}).then(checkResponse);
};

// обновление информации о юзере
export const patchUserInfo = (name, about) => {
	return fetch(`${config.baseUrl}/users/me`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({ name: name, about: about }),
	}).then(checkResponse);
};

// добавление новой карточки
export const postNewCard = (name, link) => {
	return fetch(`${config.baseUrl}/cards`, {
		method: 'POST',
		headers: config.headers,
		body: JSON.stringify({ name: name, link: link }),
	}).then(checkResponse);
};

// Удаление карточки
export const deleteCard = cardId => {
	return fetch(`${config.baseUrl}/cards/${cardId}`, {
		method: 'DELETE',
		headers: config.headers,
	}).then(checkResponse);
};

// удаление лайка с карточки
export const dislikeCard = cardId => {
	return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
		method: 'DELETE',
		headers: config.headers,
	}).then(checkResponse);
};

// добавление лайка на карточку
export const likeCard = cardId => {
	return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
		method: 'PUT',
		headers: config.headers,
	}).then(checkResponse);
};

//обновление аватара юзера
export const patchAvatarProfile = avatar => {
	return fetch(`${config.baseUrl}/users/me/avatar`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({ avatar: avatar }),
	}).then(checkResponse);
};
