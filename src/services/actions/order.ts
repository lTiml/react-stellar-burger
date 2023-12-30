import { createOrderApi } from "../../utils/api/order";
import { clearProducts } from "./constructor";
import { IOrderActions } from "../types/actions/order.types";
import { AppThunk } from "../store/store.types";

export const SET_ORDER_NUMBER_SUCCESS = 'SET_ORDER_NUMBER_SUCCESS';
export const SET_ORDER_NUMBER_RUQUEST = 'SET_ORDER_NUMBER_RUQUEST';
export const SET_ORDER_NUMBER_FAILED = 'SET_ORDER_NUMBER_FAILED';

export const setOrderNumberSuccess = (number: number | null):IOrderActions => {
	return {
		type: SET_ORDER_NUMBER_SUCCESS,
		orderNumber: number,
	};
};

export const setOrderNumberRequest = ():IOrderActions => ({
	type: SET_ORDER_NUMBER_RUQUEST,
})

export const setOrderNumberFailed = (error: Error):IOrderActions => ({
	type: SET_ORDER_NUMBER_FAILED,
	payload: error,
})

export const createOrder = (ingredientId: string[]):AppThunk => {
	return async (dispatch) => {
		dispatch(setOrderNumberRequest());
		createOrderApi(ingredientId)
			.then(data => {
				dispatch(setOrderNumberSuccess(data.order.number))
				dispatch(clearProducts())
			})
			.catch(error => dispatch(setOrderNumberFailed(error)));
	};
};