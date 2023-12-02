import { authUser } from "../../utils/api/api";
import { getCookie, setCookie } from "../../utils/cookie";
import { changeUserInfo, getUserInfo } from "../../utils/api/userInfo";
import { HOME } from "../../components/app/router/config/routes";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_FAILED = 'PROFILE_FAILED';
export const CHANGE_PROFILE_SUCCESS = 'CHANGE_PROFILE_SUCCESS';
export const CHANGE_PROFILE_REQUEST = 'CHANGE_PROFILE_REQUEST';
export const CHANGE_PROFILE_FAILED = 'CHANGE_PROFILE_FAILED';

export const loginUser = (email, password, navigate) => {
	return async (dispatch) => {
		dispatch({ type: LOGIN_REQUEST });
		authUser(email, password)
			.then(data => {
				dispatch({ type: LOGIN_SUCCESS, payload: data });
				setCookie('accessToken', data.accessToken);
				localStorage.setItem('refresh', data.refreshToken);
				navigate(HOME);
			})
			.catch(error => dispatch({ type: LOGIN_FAILED, error }));
	}
}

export const getUserInfoAction = () => {
	return async (dispatch) => {
		dispatch({ type: PROFILE_REQUEST });
		const token = getCookie('accessToken');
		getUserInfo(token)
			.then(data => dispatch({ type: PROFILE_SUCCESS, payload: data }))
			.catch(error => dispatch({ type: PROFILE_FAILED, error }));
	}
}

export const changeUserInfoAction = (item) => {
	return async (dispatch) => {
		dispatch({ type: CHANGE_PROFILE_REQUEST });
		const token = getCookie('accessToken');
		changeUserInfo(token, item)
			.then(data => dispatch({ type: CHANGE_PROFILE_SUCCESS, payload: data }))
			.catch(error => dispatch({ type: CHANGE_PROFILE_FAILED, error }));
	}
}