import { Middleware, MiddlewareAPI } from "redux";

type WebSocketActions = {
	wsConnect: string;
	wsSendMessage?: string;
	wsConnecting: string;
	wsDisconnect: string;
	onOpen: string;
	onClose: string;
	onError: string;
	onMessage: string;
}

// type WebSocketPayload = string;

// type WebSocketAction = {
// 	type: keyof WebSocketActions;
// 	payload?: WebSocketPayload;
// }

export const socketMiddleware = (wsActions: WebSocketActions): Middleware => {
	return (store: MiddlewareAPI) => {
		let socket: WebSocket | null = null;
		let isConnected = false;
		let reconnectTimer = 0;

		return (next) => (action) => {
			const { dispatch } = store;
			const { type } = action;
			const {
				wsSendMessage,
				wsConnecting,
				wsDisconnect,
				wsConnect,
				onOpen,
				onClose,
				onError,
				onMessage,
			} = wsActions;

			if (type === wsConnect) {
				socket = new WebSocket(action.payload);
				isConnected = true;
				dispatch({ type: wsConnecting });
			}

			if (socket) {
				socket.onopen = () => {
					dispatch({ type: onOpen });
				};
				socket.onerror = () => {
					dispatch({ type: onError, payload: "Error" });
					dispatch({ type: wsConnect });
				};
				socket.onmessage = event => {
					const { data } = event;
					const parsedData = JSON.parse(data);
					dispatch({ type: onMessage, payload: parsedData });
				};
				socket.onclose = event => {
					if (event.code !== 1000) {
						dispatch({ type: onError, payload: event.code.toString() });
					}
					dispatch({ type: onClose });
					if (isConnected) {
						dispatch({ type: wsConnecting });
						reconnectTimer = window.setTimeout(() => {
							dispatch({ type: wsConnect });
						}, 3000);
					}
				};
				if (type === wsSendMessage) {
					socket.send(JSON.stringify(action.payload));
				}
				if (type === wsDisconnect) {
					socket.close();
					socket = null;
					clearTimeout(reconnectTimer);
					isConnected = false;
				}
			}
			next(action);
		}
	}
}