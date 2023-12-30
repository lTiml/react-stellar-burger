import { url, api } from "./api";
import { IForm } from "../../services/types/actions/login.types";

export const getUserInfo = async (token: string) => {
	const { data } = await api.get(`${url}/auth/user`, {
		headers: { authorization: token },
	});
	return data;
}

export const changeUserInfo = async (token: string, form: IForm) => {
	const { data } = await api.patch(`${url}/auth/user`, form, {
		headers: { authorization: token },
	});
	return data;
}