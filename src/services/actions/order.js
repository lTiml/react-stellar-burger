export const SET_ORDER_NUMBER_SUCCESS = 'SET_ORDER_NUMBER_SUCCESS';
export const SET_ORDER_NUMBER_RUQUEST = 'SET_ORDER_NUMBER_RUQUEST';
export const SET_ORDER_NUMBER_FAILED = 'SET_ORDER_NUMBER_FAILED';

export const setOrderNumberSuccess = number => {
	return {
		type: SET_ORDER_NUMBER_SUCCESS,
		orderNumber: number,
	};
};

export const setOrderNumberRequest = () => ({
	type: SET_ORDER_NUMBER_RUQUEST,
})

export const setOrderNumberFailed = () => ({
	type: SET_ORDER_NUMBER_FAILED,
})