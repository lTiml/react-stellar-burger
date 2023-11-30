export const allIngredients = store => store.ingredientsReducer.ingredients
export const selectIngredientById = id => store =>
	store.ingredientsReducer.ingredients.find(ingredients => ingredients._id === id)
export const getCurrentItem = state => state.modalReducer.currentIngredient;
export const profileOrders = store => store.profileFeedReducer.orders;
export const orders = store => store.feedReducer.orders;
export const total = store => store.feedReducer.total;
export const totalInDay = store => store.feedReducer.totalInDay;