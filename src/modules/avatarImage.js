import { popapAvatr, formAvatarButton, imageAvatarInput, profileImage } from './elements';
import { closePopap, buttonLoading } from './popap';
import { patchAvatarProfile } from './api';
export function handleAvatarUpdate(evt) {
	evt.preventDefault();
	const avatarLink = imageAvatarInput.value;

	buttonLoading(formAvatarButton, true);
	patchAvatarProfile(avatarLink)
		.then(data => {
			profileImage.style.backgroundImage = `url('${data.avatar}')`;
			closePopap(popapAvatr);
		})
		.catch(err => {
			console.error('Ошибка при обновлении аватара:', err);
		})
		.finally(() => {
			buttonLoading(formAvatarButton, false);
		});
}
