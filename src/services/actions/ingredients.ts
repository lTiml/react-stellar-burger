import { getData } from "../../utils/api/order";
import { AppThunk } from "../store/store.types";

export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const getIngredients = ():AppThunk => {
	return function (dispatch) {
		dispatch({ type: GET_INGREDIENTS_REQUEST })
		getData()
			.then(data => {
				dispatch({
					type: GET_INGREDIENTS_SUCCESS,
					allIngredients: data,
				});
			})
			.catch(err => {
				dispatch({
					type: GET_INGREDIENTS_FAILED,
					error: err,
				})
			});
	};
};