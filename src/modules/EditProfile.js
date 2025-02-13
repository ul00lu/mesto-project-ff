import {
	popupTypeEdit,
	ptofileTitle,
	profileDescription,
	nameInput,
	jobInput,
	editProfileFormButton,
} from './elements.js';

import { closePopap,buttonLoading } from './popap.js';

import { patchUserInfo } from './api.js';

export function handleEditProfileFormSubmit(evt) {
	evt.preventDefault();
	const valueNameInput = nameInput.value;
	const valueJobInput = jobInput.value;
	buttonLoading(editProfileFormButton,true);
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
