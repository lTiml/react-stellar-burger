import {
	LOGIN_REQUEST,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	PROFILE_REQUEST,
	PROFILE_SUCCESS,
	PROFILE_FAILED,
	CHANGE_PROFILE_REQUEST,
	CHANGE_PROFILE_SUCCESS,
	CHANGE_PROFILE_FAILED
} from "../actions/login";
import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILED } from "../actions/logout";
import { ILoginAction } from "../types/actions/login.types";
import { ILogoutActions } from "../types/actions/logout.types";

interface ILoginState {
	email: string,
	name: string,
	isAuthCheck: boolean,
	isLoading: boolean,
	error: null | Error,
}

const initialState: ILoginState = {
	email: '',
	name: '',
	isAuthCheck: false,
	isLoading: false,
	error: null,
}

export const loginReducer = (state = initialState, action: ILoginAction | ILogoutActions) => {
	switch (action.type) {
		case LOGIN_SUCCESS: {
			return {
				email: action.payload.user.email,
				name: action.payload.user.name,
				isLoading: false,
				error: null,
			}
		}

		case LOGIN_REQUEST: {
			return {
				...state,
				isLoading: true,
				error: null,
			}
		}

		case LOGIN_FAILED: {
			return {
				email: '',
				name: '',
				isLoading: false,
				error: action.error,
			}
		}

		case LOGOUT_SUCCESS: {
			return {
				email: '',
				name: '',
				isLoading: false,
				error: null,
				accessToken: '',
			}
		}

		case LOGOUT_REQUEST: {
			return {
				...state,
				isLoading: true,
				error: null,
			}
		}

		case LOGOUT_FAILED: {
			return {
				...state,
				isLoading: false,
				error: action.error,
			}
		}

		case PROFILE_SUCCESS: {
			return {
				email: action.payload.user.email,
				name: action.payload.user.name,
				isLoading: false,
				error: null,
			}
		}

		case PROFILE_REQUEST: {
			return {
				...state,
				isLoading: true,
				error: null,
			}
		}

		case PROFILE_FAILED: {
			return {
				...state,
				isLoading: false,
				error: action.error,
			}
		}

		case CHANGE_PROFILE_SUCCESS: {
			return {
				email: action.payload.user.email,
				name: action.payload.user.name,
				isLoading: false,
				error: null,
			}
		}

		case CHANGE_PROFILE_REQUEST: {
			return {
				...state,
				isLoading: true,
				error: null,
			}
		}

		case CHANGE_PROFILE_FAILED: {
			return {
				...state,
				isLoading: false,
				error: action.error,
			}
		}
		
		default: {
			return state;
		}
	}
}