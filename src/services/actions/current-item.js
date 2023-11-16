export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM';

export const setCurrentItem = item => {
	return {
		type: SET_CURRENT_ITEM,
		item: item,
	};
};