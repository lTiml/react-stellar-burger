import { getData } from "../../utils/api/order";

type IGetData = ReturnType<typeof getData>

export interface IIngredient {
	calories?: number,
	carbohydrates?: number,
	fat?: number,
	image?: string,
	image_large?: string,
	image_mobile?: string,
	name: string,
	price: number,
	proteins?: number,
	type?: string,
	__v?: number,
	_id?: string,
}

export interface IBurgerCardPropTypes extends Omit<IIngredient, "name"> {
	description: string;
	item: IIngredient;
	count: number;
	img: string
}