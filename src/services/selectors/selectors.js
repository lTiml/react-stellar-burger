export const allIngredients = store => store.ingredientsReducer.ingredients
export const selectIngredientById = id => store =>
	store.ingredientsReducer.ingredients.find(ingredients => ingredients._id === id)
export const getCurrentItem = state => state.modalReducer.currentIngredient