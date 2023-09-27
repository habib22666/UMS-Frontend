import { baseApi } from './baseApi';

const AUTH_URL = 'auth';

const authAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: 'auth/login',
        method: 'POST',
        data: loginData,
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const { useUserLoginMutation } = authAPi;
