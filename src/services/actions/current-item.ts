import { IBurgerConstructorIngredient } from "../reducers/constructor-reducer";
import { ISetCurrentItem } from "../types/actions/burger-constructor";

export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM';

export const setCurrentItem = (item: IBurgerConstructorIngredient):ISetCurrentItem => {
	return {
		type: SET_CURRENT_ITEM,
		item: item,
	};
};