import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://atlassiantask.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: "getProjects",
      }),
    }),
  }),
});
