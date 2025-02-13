import {
	cardsContainer,
	placeNameInput,
	placeLinkInput,
	popapAddCard,
	newPlaceForm,
	newPlaceFormButton,
} from './elements.js';
import { closePopap, buttonLoading } from './popap.js';
import { addCard } from './addCard.js';
import { postNewCard } from './api.js';
export function handleNewCardFormSubmit(evt) {
	evt.preventDefault();
	const placeName = placeNameInput.value;
	const placeLink = placeLinkInput.value;

	buttonLoading(newPlaceFormButton, true);
	postNewCard(placeName, placeLink)
		.then(data => {
			addCard(data);
			closePopap(popapAddCard);
		})
		.catch(err => console.error(`Ошибка запроса: ${err}`))
		.finally(() => {
			buttonLoading(newPlaceFormButton, true);
		});
}
