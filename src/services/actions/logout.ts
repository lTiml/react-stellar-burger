import { logout } from "../../utils/api/api";
import { deleteCookie } from "../../utils/cookie";
import { AppThunk } from "../store/store.types";

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const logoutAction = (token: string):AppThunk => {
	return async (dispatch) => {
		dispatch({ type: LOGOUT_SUCCESS });
		logout(token)
			.then(() => {
				dispatch({ type: LOGOUT_REQUEST });
				deleteCookie('accessToken');
				localStorage.deleteItem('refresh');
			})
			.catch(error => dispatch({ type: LOGOUT_FAILED, error }));
	};
};