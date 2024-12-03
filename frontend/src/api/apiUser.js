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
    updateAuthorBio: builder.mutation({
      query: (data) => ({
        url: "/author",
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useUpdateAuthorBioMutation,
} = apiUser;

export default apiUser;
