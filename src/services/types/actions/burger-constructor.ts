import {
	SET_CONSTRUCTOR_INGREDIENTS,
	CLEAR_BURGER_CONSTRUCTOR,
	SET_CONSTRUCTOR_BUN,
	DELETE_INGREDIENT,
	MOVE_PRODUCT
} from "../../actions/constructor";
import { IIngredient } from "../ingredients";
import { SET_CURRENT_ITEM } from "../../actions/current-item";
import { IBurgerConstructorIngredient } from "../../reducers/constructor-reducer";

interface IAddIngredients {
	type: typeof SET_CONSTRUCTOR_INGREDIENTS;
	payload: {
		ingredient: IIngredient;
		key: string;
	}
}

interface IClearIngredients {
	type: typeof CLEAR_BURGER_CONSTRUCTOR;
}

interface IAddBun {
	type: typeof SET_CONSTRUCTOR_BUN;
	payload: IIngredient;
}

interface IDeleteIngredient {
	type: typeof DELETE_INGREDIENT;
	payload: string;
}

interface IMoveIngredient {
	type: typeof MOVE_PRODUCT;
	payload: IBurgerConstructorIngredient[];
}

export interface ISetCurrentItem {
	type: typeof SET_CURRENT_ITEM
	item: IBurgerConstructorIngredient
}

export type IBurgerConstructorActions = IAddIngredients | IClearIngredients | IAddBun | IDeleteIngredient | IMoveIngredient;