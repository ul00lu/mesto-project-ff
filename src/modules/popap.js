export function openPopap(popap) {
	popap.classList.remove('popup_is-animated');
	popap.classList.add('popup_is-opened');
	document.addEventListener('keydown', escHandler);
}

export function closePopap(popap) {
	popap.classList.add('popup_is-animated');
	popap.classList.remove('popup_is-opened');
	document.removeEventListener('keydown', escHandler);
}

export function closePopapButton(evt, popap) {
	if (evt.target.classList.contains('popup__close')) {
		closePopap(popap);
	}
}

export function escHandler(evt) {
	if (evt.key === 'Escape') {
		// Находим открытый попап
		const openPopap = document.querySelector('.popup_is-opened');
		if (openPopap) {
			closePopap(openPopap); // Закрываем найденный попап
		}
	}
}

export function overlayHandler(evt, popap) {
	if (evt.target.classList.contains('popup')) {
		closePopap(popap);
	}
}

export const buttonLoading = (button, isloading) => {
	if (isloading) {
		button.classList.add('popup__button_disabled');
		button.textContent = 'Сохранение...';
		button.disabled = true;
	} else {
		button.textContent = 'Сохранить';
		button.disabled = false;
		button.classList.remove('popup__button_disabled');
	}
};
