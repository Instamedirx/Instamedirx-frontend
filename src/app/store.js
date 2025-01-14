import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './features/signupSlice';
import { apiSlice } from './services/apiSlice';

const preloadedState = {
	signup: {
		selectedAccountType:
			localStorage.getItem('selectedAccountType') || '',
		signupData: {},
	},
};

export const store = configureStore({
	reducer: {
		signup: signupReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	preloadedState,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});
