import { createUser } from "../../utils/api/api";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "../../components/app/router/config/routes";
import { Dispatch } from "react";
import { IRegisterActions } from "../types/actions/register.types";

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const registerUser = (email: string, password: string, name: string) => {
	return async (dispatch: Dispatch<IRegisterActions>) => {
		dispatch({ type: REGISTER_REQUEST });
		try {
			const data = await createUser(email, password, name);
			dispatch({ type: REGISTER_SUCCESS, payload: data });
			const navigate = useNavigate();
			navigate(LOGIN_PATH)
			localStorage.setItem('refresh', data.refreshToken)
		} catch (error) {
			// dispatch({ type: REGISTER_FAILED, error})
			localStorage.removeItem('refresh')
		}
	}
}