import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://relaxed-wing.80-80-218-230.plesk.page/",
  }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: "getProjects",
      }),
    }),
  }),
});
