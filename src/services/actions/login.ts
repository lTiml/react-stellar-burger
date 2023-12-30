import { authUser } from "../../utils/api/api";
import { getCookie, setCookie } from "../../utils/cookie";
import { changeUserInfo, getUserInfo } from "../../utils/api/userInfo";
import { HOME } from "../../components/app/router/config/routes";
import { AppThunk } from "../store/store.types";
import { IForm } from "../types/actions/login.types";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_FAILED = 'PROFILE_FAILED';
export const CHANGE_PROFILE_SUCCESS = 'CHANGE_PROFILE_SUCCESS';
export const CHANGE_PROFILE_REQUEST = 'CHANGE_PROFILE_REQUEST';
export const CHANGE_PROFILE_FAILED = 'CHANGE_PROFILE_FAILED';

export const loginUser = (email: string, password: string, navigate:(HOME: string) => void):AppThunk => {
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

export const getUserInfoAction = ():AppThunk => {
	return async (dispatch) => {
		dispatch({ type: PROFILE_REQUEST });
		const token = getCookie('accessToken');
		getUserInfo(String(token))
			.then(data => dispatch({ type: PROFILE_SUCCESS, payload: data }))
			.catch(error => dispatch({ type: PROFILE_FAILED, error }));
	}
}

export const changeUserInfoAction = (item: IForm):AppThunk => {
	return async (dispatch) => {
		dispatch({ type: CHANGE_PROFILE_REQUEST });
		const token = getCookie('accessToken');
		changeUserInfo(String(token), item)
			.then(data => dispatch({ type: CHANGE_PROFILE_SUCCESS, payload: data }))
			.catch(error => dispatch({ type: CHANGE_PROFILE_FAILED, error }));
	}
}