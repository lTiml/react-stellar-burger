import { url, api } from "./api";

export const getUserInfo = async token => {
	try{
		const {data} = await api.get(`${url}/auth/user`, { headers: { authorization: token } });
		console.log(data)
		return data
	} catch(error) {
		throw error
	}
}

export const changeUserInfo = async (token, form) => {
	try{
		const {data} = await api.patch(`${url}/auth/user`, form, { headers: { authorization: token } });
		console.log(data)
		return data
	} catch(error) {
		throw error
	}
}