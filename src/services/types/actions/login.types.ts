import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	PROFILE_REQUEST,
	PROFILE_SUCCESS,
	PROFILE_FAILED,
	CHANGE_PROFILE_REQUEST,
	CHANGE_PROFILE_SUCCESS,
	CHANGE_PROFILE_FAILED
} from "../../actions/login";

export interface IForm {
	name: string
	email: string
}

export type TUser = {
	user: IForm
}

interface ILoginRequest {
	type: typeof LOGIN_REQUEST
}

interface ILoginSuccess {
	type: typeof LOGIN_SUCCESS
	payload: TUser
}

interface ILoginFailed {
	type: typeof LOGIN_FAILED
	error: Error
}

interface IProfileRequest {
	type: typeof PROFILE_REQUEST
}

interface IProfileSuccess {
	type: typeof PROFILE_SUCCESS
	payload: TUser
}

interface IProfileFailed {
	type: typeof PROFILE_FAILED
	error: Error
}

interface IChangeProfileRequest {
	type: typeof CHANGE_PROFILE_REQUEST
}

interface IChangeProfileSuccess {
	type: typeof CHANGE_PROFILE_SUCCESS
	payload: TUser
}

interface IChangeProfileFailed {
	type: typeof CHANGE_PROFILE_FAILED
	error: Error
}

export type ILoginAction = ILoginRequest | ILoginSuccess | ILoginFailed | IProfileRequest | IProfileSuccess | IProfileFailed | IChangeProfileRequest | IChangeProfileSuccess | IChangeProfileFailed