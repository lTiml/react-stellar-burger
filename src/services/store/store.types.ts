import { ThunkAction } from "@reduxjs/toolkit";
import { AppActions } from "../types/actions/app-actions";
import { rootReducer } from "../reducers/rootReducer";
import {
	TypedUseSelectorHook,
	useDispatch as dispatchHook,
	useSelector as selectorHook,
} from "react-redux";

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	AppActions
>;
export type AppDispatch<TReturnType = void> = (
	action: AppActions | AppThunk<TReturnType>
) => TReturnType;

export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;