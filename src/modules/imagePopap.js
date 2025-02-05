import { popupTypeImage, popupImage, popupCaption } from './elements';
import { openPopap } from './popap';

export function openImagePopup(evt) {
	const cardImage = evt.target;
	const cardDescription = cardImage.closest('.card').querySelector('.card__title');
	openPopap(popupTypeImage);
	popupImage.src = cardImage.src;
	popupCaption.textContent = cardDescription.textContent;
}
