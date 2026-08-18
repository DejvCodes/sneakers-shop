import shoppingBagReducer from './shoppingBag';
import {configureStore} from '@reduxjs/toolkit';

// Reducers
const store = configureStore({
	reducer: {
		shoppingBag: shoppingBagReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
