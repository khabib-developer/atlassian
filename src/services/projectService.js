import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dry-wave-94859.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: "getProjects",
      }),
    }),
  }),
});
