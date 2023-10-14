import {
	GET_INGREDIENTS_REQUEST,
	GET_INGREDIENTS_SUCCESS,
	GET_INGREDIENTS_FAILED,
} from "../actions/ingredients";

const initialState = {
	ingredients: [],
	isLoading: false,
	error: null,
};

export const ingredientsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_INGREDIENTS_SUCCESS: {
			return {
				ingredients: action.ingredients,
				isLoading: false,
				error: null
			};
		}

		case GET_INGREDIENTS_REQUEST: {
			return {
				...state,
				isLoading: true,
				error: null,
			}
		}

		case GET_INGREDIENTS_FAILED: {
			return {
				isLoading: false,
				error: action.err,
				ingredients: [],
			}
		}

		default: {
			return state;
		}
	}
};