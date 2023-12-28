import {
	SET_ORDER_NUMBER_SUCCESS,
	SET_ORDER_NUMBER_RUQUEST,
	SET_ORDER_NUMBER_FAILED
} from "../actions/order";
import { IOrderActions } from "../types/actions/order.types";

interface IOrderState {
	order: number | null
	isLoading: boolean | null
	error: null | string
}

const initialState: IOrderState = {
	order: null,
	isLoading: false,
	error: null,
};

export const orderReducer = (state = initialState, action: IOrderActions) => {
	switch (action.type) {
		case SET_ORDER_NUMBER_SUCCESS: {
			return {
				...state,
				isLoading: false,
				order: action.orderNumber,
			};
		}

		case SET_ORDER_NUMBER_RUQUEST: {
			return {
				...state,
				isLoading: true,
				error: null,
			};
		}

		case SET_ORDER_NUMBER_FAILED: {
			return {
				isLoading: false,
				order: null,
				error: "Ошибка в SET_ORDER_NUMBER_FAILED",
			};
		}

		default: {
			return state;
		}
	}
};