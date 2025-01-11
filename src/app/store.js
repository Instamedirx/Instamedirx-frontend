import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './features/signupSlice';
import { apiSlice } from './services/apiSlice';

export const store = configureStore({
	reducer: {
		signup: signupReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});
