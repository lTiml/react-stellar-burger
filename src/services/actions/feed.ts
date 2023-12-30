import { IFeedActionTypes } from "../types/actions/feed.types";

export const FEED_CONNECTION_SUCCESS = 'FEED_CONNECTION_SUCCESS';
export const FEED_CONNECTION_CLOSED = 'FEED_CONNECTION_CLOSED';
export const FEED_CONNECTION_ERROR = 'FEED_CONNECTION_ERROR';
export const FEED_CONNECTING = 'FEED_CONNECTING';
export const FEED_DISCONNECT = 'FEED_DISCONNECT';
export const FEED_GET_FEED = 'FEED_GET_FEED';
export const FEED_CONNECT = 'FEED_CONNECT';

export const connectFeed = (url: string): IFeedActionTypes => ({
	type: FEED_CONNECT,
	payload: url,
});

export const disconnectFeed = (): IFeedActionTypes => ({
	type: FEED_DISCONNECT,
})