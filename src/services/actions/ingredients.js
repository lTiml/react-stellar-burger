import { getData } from "../../utils/api/order";
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const getIngredients = () => {
	return function (dispatch) {
		dispatch({ type: GET_INGREDIENTS_REQUEST })
		getData()
			.then(data => {
				dispatch({
					type: GET_INGREDIENTS_SUCCESS,
					ingredients: data,
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