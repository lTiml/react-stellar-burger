import { request } from "../func";

export const getData = () => {
	return request({}, "ingredients").then(data => data.data);
}

export const createOrderApi = ingredients => {
	return request(
		{
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				ingredients: ingredients,
			}),
		},
		"orders"
	);
};