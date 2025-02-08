import {
	createApi,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const loginApiSlice = createApi({
	reducerPath: 'registrationApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000/api/v1',
	}),
	endpoints: builder => ({
		createUser: builder.mutation({
			query: userData => ({
				url: '/auth/register',
				method: 'POST',
				body: userData,
				headers: { 'Content-Type': 'application/json' },
			}),
		}),
		sendVerificationCode: builder.mutation({
			query: email => ({
				url: '/auth/request-verification',
				method: 'POST',
				body: JSON.stringify({ email: email }),
				headers: { 'Content-Type': 'application/json' },
			}),
		}),
		verifyCode: builder.mutation({
			query: ({ code }) => ({
				url: '/auth/verify',
				method: 'POST',
				body: { token: code },
				headers: { 'Content-Type': 'application/json' },
			}),
		}),
	}),
});

export const {
	useCreateUserMutation,
	useSendVerificationCodeMutation,
	useVerifyCodeMutation,
} = loginApiSlice;
