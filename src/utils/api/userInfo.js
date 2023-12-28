import { url, api } from "./api";

export const getUserInfo = async token => {
	const { data } = await api.get(`${url}/auth/user`, {
		headers: { authorization: token },
	});
	return data;
}

export const changeUserInfo = async (token, form) => {
	const { data } = await api.patch(`${url}/auth/user`, form, {
		headers: { authorization: token },
	});
	return data;
}