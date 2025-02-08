import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './features/signupSlice';
import sidebarReducer from './features/sidebarSlice';
import { loginApiSlice } from './services/loginApiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

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
		sidebar: sidebarReducer,
		[loginApiSlice.reducerPath]: loginApiSlice.reducer,
	},
	preloadedState,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(loginApiSlice.middleware),
});

setupListeners(store.dispatch);
