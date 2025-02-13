export const isValid = (formElement, inputElement, validationConfig) => {
	if (inputElement.validity.patternMismatch) {
		inputElement.setCustomValidity(inputElement.dataset.errorMessage);
	} else {
		inputElement.setCustomValidity('');
	}
	if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
	} else {
		hideInputError(formElement, inputElement, validationConfig);
	}
};

export const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	errorElement.textContent = errorMessage;
	errorElement.classList.add(validationConfig.errorClass);
	inputElement.classList.add(validationConfig.inputErrorClass);
};

export const hideInputError = (formElement, inputElement, validationConfig) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	errorElement.textContent = '';
	errorElement.classList.remove(validationConfig.errorClass);
	inputElement.classList.remove(validationConfig.inputErrorClass); 
};

export const hasInvalidInput = inputList => {
	return inputList.some(inputElement => {
		return !inputElement.validity.valid;
	});
};

export const toggleButtonState = (inputList, buttonElement, validationConfig) => {
	if (hasInvalidInput(inputList)) {
	
		buttonElement.disabled = true;
		buttonElement.classList.add(validationConfig.inactiveButtonClass);
	} else {
		
		buttonElement.disabled = false;
		buttonElement.classList.remove(validationConfig.inactiveButtonClass);
	}
};

export const setEventListeners = (formElement, validationConfig) => {
	const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
	const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
	inputList.forEach(inputElement => {
		inputElement.addEventListener('input', () => {
			isValid(formElement, inputElement, validationConfig);
			toggleButtonState(inputList, buttonElement, validationConfig);
		});
	});
};

export const enableValidation = validationConfig => {
	const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));

	formList.forEach(formElement => {
		setEventListeners(formElement, validationConfig);
	});
};
