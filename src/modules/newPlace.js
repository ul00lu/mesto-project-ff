import { cardsContainer, placeNameInput, placeLinkInput, popapAddCard } from './elements.js';
import { createCard, addCard } from './card.js';
import { closePopap } from './popap.js';
export function handleNewCardFormSubmit(evt) {
	evt.preventDefault();
	const placeName = placeNameInput.value;
	const placeLink = placeLinkInput.value;
	const card = {
		name: placeName,
		link: placeLink,
	};
	addCard(card);
	closePopap(popapAddCard);
	placeNameInput.value = '';
	placeLinkInput.value = '';
}
