const url = 'https://norma.nomoreparties.space/api/ingredients';

export const getData = () => {
	return fetch(url)
	.then(res => res.ok ? res.json() : Promise.reject(`Ошибка в api Promise: ${res.status}`))
	.then(data => data.data)
}