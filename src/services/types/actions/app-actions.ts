import { IBurgerConstructorActions } from "./burger-constructor";
import { IProfileFeedActionTypes } from "./feed-profile.types";
import { IFeedActionTypes } from "./feed.types";
import { IIngredientActionTypes } from "./ingredients.type";
import { ILoginAction } from "./login.types";
import { ILogoutActions } from "./logout.types";
import { IOrderActions } from "./order.types";

export type AppActions = IBurgerConstructorActions | IProfileFeedActionTypes| IFeedActionTypes | IIngredientActionTypes | ILoginAction | ILogoutActions | IOrderActions;