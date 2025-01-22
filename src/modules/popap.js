export function openPopap(popap) {
	popap.classList.remove('popup_is-animated');
	popap.classList.add('popup_is-opened');
}
export function closePopap(popap) {
	popap.classList.add('popup_is-animated');
	popap.classList.remove('popup_is-opened');
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
			document.removeEventListener('keydown', escHandler);
		}
	}
}

export function overlayHandler(evt, popap) {
	if (evt.target.classList.contains('popup')) {
		closePopap(popap);
	}
}
