import { v4 as uuid } from "uuid";
import { IBurgerConstructorIngredient } from "../reducers/constructor-reducer";
import { IBurgerConstructorActions } from "../types/actions/burger-constructor";
import { IIngredient } from "../types/ingredients";

export const SET_CONSTRUCTOR_INGREDIENTS = 'SET_CONSTRUCTOR_INGREDIENTS';
export const CLEAR_BURGER_CONSTRUCTOR = 'CLEAR_BURGER_CONSTRUCTOR';
export const SET_CONSTRUCTOR_BUN = 'SET_CONSTRUCTOR_BUN';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const MOVE_PRODUCT = 'MOVE_PRODUCT';

export const addBun = (item: IIngredient): IBurgerConstructorActions => {
	return {
		type: SET_CONSTRUCTOR_BUN,
		payload: item,
	};
};

export const addIngredients = (item: IIngredient):IBurgerConstructorActions => {
	return {
		type: SET_CONSTRUCTOR_INGREDIENTS,
		payload: {
			ingredient: item,
			key: uuid(),
		},
	};
};

export const moveProduct = (item: IBurgerConstructorIngredient[]):IBurgerConstructorActions => {
	return {
		type: MOVE_PRODUCT,
		payload: item,
	};
};

export const deleteItem = (itemId: string):IBurgerConstructorActions => {
	return {
		type: DELETE_INGREDIENT,
		payload: itemId,
	};
};

export const clearProducts = ():IBurgerConstructorActions => {
	return {
		type: CLEAR_BURGER_CONSTRUCTOR
	};
};