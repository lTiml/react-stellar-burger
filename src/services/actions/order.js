import { createOrderApi } from "../../utils/api/order";
import { clearProducts } from "./constructor";
export const SET_ORDER_NUMBER_SUCCESS = 'SET_ORDER_NUMBER_SUCCESS';
export const SET_ORDER_NUMBER_RUQUEST = 'SET_ORDER_NUMBER_RUQUEST';
export const SET_ORDER_NUMBER_FAILED = 'SET_ORDER_NUMBER_FAILED';

export const setOrderNumberSuccess = number => {
	return {
		type: SET_ORDER_NUMBER_SUCCESS,
		orderNumber: number,
	};
};

export const setOrderNumberRequest = () => ({
	type: SET_ORDER_NUMBER_RUQUEST,
})

export const setOrderNumberFailed = error => ({
	type: SET_ORDER_NUMBER_FAILED,
	payload: error,
})

export const createOrder = ingredientId => {
	return async (dispatch) => {
		dispatch(setOrderNumberRequest());
		createOrderApi(ingredientId)
			.then(data => {
				dispatch(setOrderNumberSuccess(data.order.number))
				dispatch(clearProducts())
			})
			.catch(err => dispatch(setOrderNumberFailed(err)));
	};
};