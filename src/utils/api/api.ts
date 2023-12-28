import axios from 'axios';
import { getCookie, setCookie } from '../cookie';
import { LOGIN_PATH } from '../../components/app/router/config/routes';

export const url = 'https://norma.nomoreparties.space/api';
export const allOrdersUrl = 'wss://norma.nomoreparties.space/orders/all';
export const userOrdersUrl = (token: string) => `wss://norma.nomoreparties.space/orders?token=${token}`;

export const api = axios.create({
	url: url,
});

export const refreshToken = async () => {
	const refresh = localStorage.getItem('refresh')
	const { data } = await axios.post(`${url}/auth/token`, { token: refresh });
	localStorage.setItem('refresh', data.refreshToken)
	setCookie('accessToken', data.accessToken)
	return data
}

api.interceptors.response.use(
	response => {
		return response;
	},
	async error => {
		if (error.response.status === 403) {
			try {
				return refreshToken()
				.then(() => {
					const updatedToken = getCookie('accessToken')
					const updatedConfig = { ...error.config, headers: { authorization: updatedToken } };
					return api.request(updatedConfig);
				})
			} catch (error) {
				window.location.href = LOGIN_PATH;
				return await Promise.reject(error);
			}
		}
		return Promise.reject(error);
	}
);

export const createUser = async (email: string, password: string, name: string) => {
	const {data} = await axios.post(`${url}/auth/register`, {email, password, name})
	return data
}

export const authUser = async (email: string, password: string) => {
	const {data} = await api.post(`${url}/auth/login`, {email, password})
	return data
}

export const logout = async (token: string) => {
	const {data} = await api.post(`${url}/auth/logout`, {token})
	return data
}

export const forgotPassword = async (email: string) => {
	const res = await axios.post(`${url}/password-reset`, {email})
	return res
}

export const resetPassword = async (password: string, token: string) => {
	const res = await axios.post(`${url}/password-reset/reset`, {password, token});
	return res
}