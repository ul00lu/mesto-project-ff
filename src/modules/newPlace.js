import { cardsContainer, placeNameInput, placeLinkInput, popapAddCard } from './elements.js';
import { createCard } from './card.js';
import { closePopap } from './popap.js';
export function validateAndSubmit(evt) {
	evt.preventDefault();
	const card = createCard(placeNameInput, placeLinkInput);
	cardsContainer.prepend(card);
  closePopap(popapAddCard);
	placeNameInput.value = '';
	placeLinkInput.value = '';
}
