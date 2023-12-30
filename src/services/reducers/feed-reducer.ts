import {
	FEED_CONNECT,
	FEED_CONNECTING,
	FEED_CONNECTION_CLOSED,
	FEED_CONNECTION_ERROR,
	FEED_CONNECTION_SUCCESS,
	FEED_DISCONNECT,
	FEED_GET_FEED,
} from "../actions/feed";
import { socketMiddleware } from "../middleware/socketMiddleware";
import { IFeedActionTypes } from "../types/actions/feed.types";
import { IFeedOrder } from "../types/feed";

interface IFeedState {
	orders: IFeedOrder[];
	total: null | number;
	totalToday: null | number;
	isLoading: boolean;
	wsConnected: boolean;
	error: null | Error;
}

const initialState: IFeedState = {
	orders: [],
	total: null,
	totalToday: null,
	isLoading: false,
	wsConnected: false,
	error: null,
};

export const feedReducer = (state = initialState, action: IFeedActionTypes) => {
	switch (action.type) {
		case FEED_CONNECTING: {
			return {
				...state,
				isLoading: true,
			};
		}
		case FEED_CONNECTION_SUCCESS: {
			return {
				...state,
				isLoading: false,
				wsConnected: true,
				error: null,
			};
		}
		case FEED_CONNECTION_ERROR: {
			return {
				...state,
				error: action.payload,
				wsConnected: false,
			}
		}
		case FEED_GET_FEED: {
			return {
				...state,
				wsConnected: true,
				orders: action.payload.orders,
				total: action.payload.total,
				totalToday: action.payload.totalToday
			};
		}
		case FEED_CONNECTION_CLOSED: {
			return {
				...state,
				wsConnected: false,
				error: null,
			}
		}
		default:
			return state;
	}
};

export const feedMiddleware = socketMiddleware({
	wsConnect: FEED_CONNECT,
	wsDisconnect: FEED_DISCONNECT,
	wsConnecting: FEED_CONNECTING,
	onOpen: FEED_CONNECTION_SUCCESS,
	onClose: FEED_CONNECTION_CLOSED,
	onMessage: FEED_GET_FEED,
	onError: FEED_CONNECTION_ERROR,
})