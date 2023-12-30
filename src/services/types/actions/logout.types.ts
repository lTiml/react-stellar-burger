import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILED } from "../../actions/logout";

interface ILogoutRequest {
	type: typeof LOGOUT_REQUEST;
}

interface ILogoutSuccess {
	type: typeof LOGOUT_SUCCESS;
}

interface ILogoutFailed {
	type: typeof LOGOUT_FAILED;
	error: Error;
}

export type ILogoutActions = ILogoutRequest | ILogoutSuccess | ILogoutFailed;;