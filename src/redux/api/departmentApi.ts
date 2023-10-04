import { baseApi } from './baseApi';

const DEPARTMENT_URL = '/management-departments';

const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const { useAddDepartmentMutation } = departmentApi;
