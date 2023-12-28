import {
	PROFILE_FEED_OPEN,
	PROFILE_FEED_CLOSE,
	PROFILE_FEED_CONNECT,
	PROFILE_FEED_CONNECTING,
	PROFILE_FEED_DESCONNECT,
	PROFILE_FEED_ERROR,
	PROFILE_FEED_GET_FEED,
} from '../actions/feed-profile';
import { socketMiddleware } from '../middleware/socketMiddleware';

const initialProfileFeed = {
	orders: [],
	total: null,
	totalToday: null,
	isLoading: false,
	feedConnected: false,
	error: null,
}

export const profileFeedReducer = (state = initialProfileFeed, action) => {
	switch (action.type) {
		case PROFILE_FEED_CONNECTING:
			return {
				...state,
				isLoading: true,
			}
		case PROFILE_FEED_OPEN:
			return {
				...state,
				isLoading: false,
				feedConnected: true,
			}
		case PROFILE_FEED_ERROR:
			return {
				...state,
				error: action.payload,
			}
		case PROFILE_FEED_GET_FEED:
			return {
				...state,
				feedConnected: true,
				orders: action.payload.orders,
				total: action.payload.total,
				totalToday: action.payload.totalToday,
			}
		case PROFILE_FEED_CLOSE:
			return {
				...state,
				feedConnected: false,
			}
		default:
			return state;
	}
}

export const profileFeedMiddleware = socketMiddleware({
	wsConnecting: PROFILE_FEED_CONNECTING,
	wsDisconnect: PROFILE_FEED_DESCONNECT,
	wsConnect: PROFILE_FEED_CONNECT,
	onMessage: PROFILE_FEED_GET_FEED,
	onOpen: PROFILE_FEED_OPEN,
	onClose: PROFILE_FEED_CLOSE,
	onError: PROFILE_FEED_ERROR,
});