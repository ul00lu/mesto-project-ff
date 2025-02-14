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
