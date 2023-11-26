import { 
	SET_CONSTRUCTOR_INGREDIENTS,
	SET_CONSTRUCTOR_BUN,
	DELETE_INGREDIENT,
	MOVE_PRODUCT,
	CLEAR_BURGER_CONSTRUCTOR,
} from "../actions/constructor";

const initialState = {
	bun: null,
	ingredients: [],
};

export const burgerConstructorReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CONSTRUCTOR_INGREDIENTS:
			return {
				...state,
				ingredients: [...state.ingredients, action.payload],
			};

		case SET_CONSTRUCTOR_BUN:
			return {
				...state,
				bun: action.payload,
			};

		case DELETE_INGREDIENT:
			const index = state.ingredients.findIndex(
				item => item.ingredient._id === action.payload
			);
			if (index !== -1) {
				const newIngredients = [...state.ingredients];
				newIngredients.splice(index, 1);
				return {
					...state,
					ingredients: newIngredients,
				};
			}
			return state;

		case MOVE_PRODUCT:
			return {
				...state,
				ingredients: action.payload,
			};

		case CLEAR_BURGER_CONSTRUCTOR:
			return {
				bun: null,
				ingredients: [],
			}

		default:
			return state;
	}
};