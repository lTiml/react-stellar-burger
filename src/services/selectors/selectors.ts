import { RootState } from "../store/store.types";

export const allIngredients = (store: RootState) => store.ingredientsReducer.allIngredients;
export const selectIngredientById = (id: string | undefined) => (store: RootState) =>
	store.ingredientsReducer.allIngredients.find(ingredients => ingredients._id === id)
export const getCurrentItem = (state: RootState) => state.modalReducer.currentIngredient;
export const profileOrders = (store: RootState) => store.profileFeedReducer.orders;
export const orders = (store: RootState) => store.feedReducer.orders;
export const total = (store: RootState) => store.feedReducer.total;
export const totalToday = (store: RootState) => store.feedReducer.totalToday;