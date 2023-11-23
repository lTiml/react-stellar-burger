import { url } from "./api/api";
import { getCookie } from "./cookie";

export const isUserLogin = () => {
	const login = getCookie("accessToken");
	return login ? true : false
}

export const checkRes = (res) => {
	if (res.ok) {
		return res.json();
	} else {
		return Promise.reject(`Ошибка в checkRes func.js ${res.status}`);
	}
}

export const request = (options, endpoint) => {
	return fetch(`${url}/${endpoint}`, options).then(checkRes)
}