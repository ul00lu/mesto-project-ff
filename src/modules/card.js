import { cardTemplate } from './elements';
import { deleteCard, dislikeCard, likeCard } from './api';
export function createCard(cardData, userId, removeCard, toggleLike, openImagePopup) {
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
	const likeButton = cardElement.querySelector('.card__like-button');
	const likeCount = cardElement.querySelector('.card__like-count');
	const delateButton = cardElement.querySelector('.card__delete-button');
	const cardImage = cardElement.querySelector('.card__image');
	const cardDescription = cardElement.querySelector('.card__title');
	const cardId = cardData._id;
	cardDescription.textContent = cardData.name;
	cardImage.src = cardData.link;
	cardImage.alt = cardData.name;
	likeCount.textContent = cardData.likes ? cardData.likes.length : 0;

	// Проверяем, лайкал ли пользователь карточку
	const isLiked = cardData.likes.some(user => {
		return user._id === userId;
	});

	if (isLiked) {
		likeButton.classList.add('card__like-button_is-active');
	}

	if (cardData.owner && cardData.owner._id !== userId) {
		delateButton.style.display = 'none';
	} else {
		delateButton.addEventListener('click', evt => {
			removeCard(evt, cardId);
		});
	}

	likeButton.addEventListener('click', evt => {
		toggleLike(evt, cardData, cardId, likeCount);
	});

	cardImage.addEventListener('click', openImagePopup);

	return cardElement;
}

export function removeCard(evt, cardId) {
	const card = evt.target.closest('.card');
	deleteCard(cardId)
		.then(() => {
			card.remove();
		})
		.catch(err => {
			console.error('Ошибка при удалении карточки:', err);
		});
}

export function toggleLike(evt, cardData, cardId, likeCount) {
	const isLiked = evt.target.classList.contains('card__like-button_is-active');
	if (isLiked) {
		dislikeCard(cardId)
			.then(data => {
				cardData.likes = data.likes;
				likeCount.textContent = data.likes.length;
				evt.target.classList.remove('card__like-button_is-active');
			})
			.catch(err => {
				console.error('Ошибка при удалении лайка:', err);
			});
	} else {
		likeCard(cardId)
			.then(data => {
				cardData.likes = data.likes;
				likeCount.textContent = data.likes.length;
				evt.target.classList.add('card__like-button_is-active');
			})
			.catch(err => {
				console.error('Ошибка при добавлении лайка:', err);
			});
	}
}
