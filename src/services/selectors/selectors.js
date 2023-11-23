export const allIngredients = store => store.allIngredientsReducer.allIngredients
export const selectIngredientById = id => store =>
	store.allIngredientsReducer.allIngredients.find(ingredients => ingredients._id === id)
export const getCurrentItem = state => state.modalReducer.currentIngredient