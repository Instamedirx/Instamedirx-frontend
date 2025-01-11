import {
	createApi,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000/api',
	}),
	endpoints: builder => ({
		setRole: builder.mutation({
			query: role => ({
				url: '/auth/set-role',
				method: 'PUT',
				body: { role },
			}),
		}),
	}),
});

export const { useSetRoleMutation } = apiSlice;
