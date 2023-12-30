import { url } from "./api/api";
import { getCookie } from "./cookie";

export const isUserLogin = () => {
	const login = getCookie("accessToken");
	return login ? true : false
}

export const checkRes = <T>(res: Response): Promise<T> => {
	if (res.ok) {
		return res.json() as Promise<T>;
	} else {
		return Promise.reject(`Ошибка в checkRes func.js ${res.status}`);
	}
}

export const request = <T>(options: {}, endpoint: string): Promise<T> => {
	return fetch(`${url}/${endpoint}`, options).then(checkRes<T>)
}