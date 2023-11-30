// import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
// import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import { feedMiddleware } from './reducers/feed-reducer';
import { profileFeedMiddleware } from './reducers/profile-feed-reducer';

// const composeEnhancers =
// 	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// 		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
// 		: compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk));
export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(feedMiddleware, profileFeedMiddleware)
	}
});