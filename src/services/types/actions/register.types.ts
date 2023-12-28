import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED } from "../../actions/register";

interface IRegisterRequest {
	type: typeof REGISTER_REQUEST
}

interface IRegisterSuccess {
	type: typeof REGISTER_SUCCESS
	payload: number,
}

interface IRegisterFailed {
	type: typeof REGISTER_FAILED
	error: Error,
}

export type IRegisterActions = IRegisterRequest | IRegisterSuccess | IRegisterFailed;