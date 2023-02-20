import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://arcane-reaches-09678.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: "getProjects",
      }),
    }),
  }),
});
