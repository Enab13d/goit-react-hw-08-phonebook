import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const authAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: credentials => ({
        url: '/users/signup',
        method: 'POST',
        body: credentials,
      }),
      logout: builder.mutation({
        query: () => ({
          url: '/users/logout',
          method: 'POST',
        }),
      }),
      refresh: () => {
        builder.query({
          query: () => '/users/current',
        });
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authAPI;
