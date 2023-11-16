import { SET_CURRENT_ITEM } from "../actions/current-item";

const ingredientState = {
	currentIngredient: null,
};

export const ingredientReducer = (state = ingredientState, action) => {
	switch (action.type) {
		case SET_CURRENT_ITEM: {
			return {
				currentIngredient: action.item,
			};
		}

		default: {
			return state;
		}
	};
};