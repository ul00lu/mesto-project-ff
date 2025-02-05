import { createCard, removeCard, toggleLike } from './card';
import { cardsContainer } from './elements';
import { openImagePopup } from './imagePopap';

export function addCard(data) {
	const card = createCard(data, removeCard, toggleLike, openImagePopup);
	cardsContainer.prepend(card);
}
