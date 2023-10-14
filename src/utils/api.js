const url = 'https://norma.nomoreparties.space/api';

const checkRespons = res => {
	if (!res.ok) {
		return Promise.reject(`Ошибка ${res.status}`)
	}
	return res.json()
}

export const getData = () => {
  return fetch(`${url}/ingredients`)
    .then(checkRespons)
    .then((data) => data.data);
};

export const createOrder = (ingredients) => {
  return fetch(`${url}/orders`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      ingredients: ingredients,
    }),
  }).then(checkRespons);
};