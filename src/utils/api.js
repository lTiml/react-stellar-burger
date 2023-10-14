const url = 'https://norma.nomoreparties.space/api';

export const getData = () => {
  return fetch(`${url}/ingredients`)
    .then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка в getData: ${res.status}`)
    )
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
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Ошибка в createOrder: ${res.status}`)
  );
};