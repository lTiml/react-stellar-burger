export const allIngredients = store => store.allIngredientsReducer.addIngredients
export const selectIngredientById = id => store =>
	store.allIngredientsReducer.allIngredients.find(ingredients => ingredients._id === id)
export const getCurrentItem = state => state.modalReducer.currentIngredient