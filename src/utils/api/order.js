import { request } from "../func";
import { getCookie } from "../cookie";

export const getData = () => {
	return request({}, "ingredients").then(data => data.data);
}

export const createOrderApi = ingredients => {
	return request(
		{
			method: "POST",
			headers: {
				"Content-type": "application/json",
				Authorization: getCookie('accessToken')
			},
			body: JSON.stringify({
				ingredients: ingredients,
			}),
		},
		"orders"
	);
};