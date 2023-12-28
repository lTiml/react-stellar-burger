import {
	GET_INGREDIENTS_REQUEST,
	GET_INGREDIENTS_SUCCESS,
	GET_INGREDIENTS_FAILED
} from "../../actions/ingredients";
import { IIngredient } from "../ingredients";

interface IGetIngredientsRequest {
	type: typeof GET_INGREDIENTS_REQUEST
}

interface IGetIngredientsSuccess {
	type: typeof GET_INGREDIENTS_SUCCESS;
	allIngredients: IIngredient[];
}

interface IGetIngredientsFailed {
	type: typeof GET_INGREDIENTS_FAILED;
	error: Error;
}

export type IIngredientActionTypes = IGetIngredientsRequest | IGetIngredientsSuccess | IGetIngredientsFailed;