import {
	FEED_CONNECTING,
	FEED_CONNECT,
	FEED_CONNECTION_SUCCESS,
	FEED_DISCONNECT,
	FEED_GET_FEED,
	FEED_CONNECTION_CLOSED,
	FEED_CONNECTION_ERROR
} from "../../actions/feed";
import { IOrdersTotal } from "../feed";

interface IFeedConnecting {
	type: typeof FEED_CONNECTING;
}

interface IFeedConnect {
	type: typeof FEED_CONNECT;
	payload: string
}

interface IFeedConnectionSuccess {
	type: typeof FEED_CONNECTION_SUCCESS;
}

interface IFeedDisconnect {
	type: typeof FEED_DISCONNECT;
}

interface IFeedGetFeed {
	type: typeof FEED_GET_FEED;
	payload: IOrdersTotal
}

interface IFeedConnectionClosed {
	type: typeof FEED_CONNECTION_CLOSED;
}

interface IFeedConnectionError {
	type: typeof FEED_CONNECTION_ERROR;
	payload: Error
}

export type IFeedActionTypes = IFeedConnecting | IFeedConnect | IFeedConnectionSuccess | IFeedDisconnect | IFeedGetFeed | IFeedConnectionClosed | IFeedConnectionError;