import {
	SET_ORDER_NUMBER_RUQUEST,
	SET_ORDER_NUMBER_SUCCESS,
	SET_ORDER_NUMBER_FAILED
} from "../../actions/order";

interface IOrderRequest {
	type: typeof SET_ORDER_NUMBER_RUQUEST;
}

interface IOrderSuccess {
	type: typeof SET_ORDER_NUMBER_SUCCESS;
	orderNumber: number | null;
}

interface IOrderFailed {
	type: typeof SET_ORDER_NUMBER_FAILED;
	payload: Error
}

export type IOrderActions = IOrderRequest | IOrderSuccess | IOrderFailed;