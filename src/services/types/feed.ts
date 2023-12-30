export interface IFeedOrder {
	createdAt: string;
	ingredients: string[];
	name: string;
	number: number;
	status: string;
	updatedAt: string;
	_id: string;
}

export interface IOrdersTotal {
	orders: IFeedOrder[];
	total: number;
	success: boolean;
	totalToday: number;
}

export interface IOrder {
	order: IFeedOrder
}