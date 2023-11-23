import { v4 as uuid } from "uuid";
export const SET_CONSTRUCTOR_INGREDIENTS = 'SET_CONSTRUCTOR_INGREDIENTS';
export const CLEAR_BURGER_CONSTRUCTOR = 'CLEAR_BURGER_CONSTRUCTOR';
export const SET_CONSTRUCTOR_BUN = 'SET_CONSTRUCTOR_BUN';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const MOVE_PRODUCT = 'MOVE_PRODUCT';

export const addBun = item => {
	return {
		type: SET_CONSTRUCTOR_BUN,
		payload: item,
	};
};

export const addIngredients = item => {
	return {
		type: SET_CONSTRUCTOR_INGREDIENTS,
		payload: {
			ingredient: item,
			key: uuid(),
		},
	};
};

export const moveProduct = item => {
	return {
		type: MOVE_PRODUCT,
		payload: item,
	};
};

export const deleteItem = itemId => {
	return {
		type: DELETE_INGREDIENT,
		payload: itemId,
	};
};

export const clearProducts = () => {
	return {
		type: CLEAR_BURGER_CONSTRUCTOR
	};
};