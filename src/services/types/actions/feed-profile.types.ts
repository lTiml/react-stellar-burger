import {
	PROFILE_FEED_CONNECTING,
	PROFILE_FEED_DISCONNECT,
	PROFILE_FEED_CONNECT,
	PROFILE_FEED_GET_FEED,
	PROFILE_FEED_OPEN,
	PROFILE_FEED_CLOSE,
	PROFILE_FEED_ERROR
} from "../../actions/feed-profile";
import { IOrdersTotal } from "../feed";

interface IProfileFeedConnecting {
	type: typeof PROFILE_FEED_CONNECTING;
}

interface IProfileFeedDisconnect {
	type: typeof PROFILE_FEED_DISCONNECT;
}

interface IProfileFeedConnect{
	type: typeof PROFILE_FEED_CONNECT;
	payload: string
}

interface IProfileFeedGetFeed {
	type: typeof PROFILE_FEED_GET_FEED;
	payload: IOrdersTotal;
}

interface IProfileFeedOpen {
	type: typeof PROFILE_FEED_OPEN;
}

interface IProfileFeedClose {
	type: typeof PROFILE_FEED_CLOSE;
}

interface IProfileFeedError {
	type: typeof PROFILE_FEED_ERROR;
	payload: Error
}

export type IProfileFeedActionTypes = IProfileFeedConnecting | IProfileFeedDisconnect | IProfileFeedConnect | IProfileFeedGetFeed | IProfileFeedOpen | IProfileFeedClose | IProfileFeedError;