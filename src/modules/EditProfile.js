import { popupTypeEdit, ptofileTitle, profileDescription, nameInput, jobInput } from './elements.js';

import { closePopap } from './popap.js';


export function handleEditProfileFormSubmit(evt) {
	evt.preventDefault();
	const valueNameInput = nameInput.value;
	const valueJobInput = jobInput.value;
	ptofileTitle.textContent = valueNameInput;
	profileDescription.textContent = valueJobInput;
	closePopap(popupTypeEdit);
}
