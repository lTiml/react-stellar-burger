import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients-reducer";
import { burgerConstructorReducer } from "./constructor-reducer";
import { orderReducer } from "./order-reducer";
import { modalReducer } from "./modal-reducer";
import { loginReducer } from "./login-reducer";
import { feedReducer } from "./feed-reducer";
import { profileFeedReducer } from "./profile-feed-reducer";

export const rootReducer = combineReducers({
	burgerConstructorReducer,
	ingredientsReducer,
	orderReducer,
	modalReducer,
	loginReducer,
	feedReducer,
	profileFeedReducer,
});