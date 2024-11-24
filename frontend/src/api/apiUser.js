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
  }),
});

export const { useGetUserQuery } = apiUser;

export default apiUser;
