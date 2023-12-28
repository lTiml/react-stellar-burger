import { IProfileFeedActionTypes } from "../types/actions/feed-profile.types";

export const PROFILE_FEED_OPEN = 'PROFILE_FEED_OPEN';
export const PROFILE_FEED_CLOSE = 'PROFILE_FEED_CLOSE';
export const PROFILE_FEED_CONNECT = 'PROFILE_FEED_CONNECT';
export const PROFILE_FEED_CONNECTING = 'PROFILE_FEED_CONNECTING';
export const PROFILE_FEED_DISCONNECT = 'PROFILE_FEED_DISCONNECT';
export const PROFILE_FEED_GET_FEED = 'PROFILE_FEED_GET_FEED';
export const PROFILE_FEED_ERROR = 'PROFILE_FEED_ERROR';

export const connectProfile = (url: string): IProfileFeedActionTypes => ({
	type: PROFILE_FEED_CONNECT,
	payload: url,
});

export const disconnectProfile = ():IProfileFeedActionTypes => ({
	type: PROFILE_FEED_DISCONNECT,
});