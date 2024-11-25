import apiSlice from "./apiSlice";

const apiUser = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
        credentials: "include",
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: "/user",
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = apiUser;

export default apiUser;
