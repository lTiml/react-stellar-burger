import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients-reducer";
import { burgerConstructorReducer } from "./constructor-reducer";
import { orderReducer } from "./order-reducer";
import { ingredientReducer } from "./current-item-reducer";
import { loginReducer } from "./login-reducer";

export const rootReducer = combineReducers({
	burgerConstructorReducer,
	ingredientsReducer,
	ingredientReducer,
	orderReducer,
	loginReducer,
});