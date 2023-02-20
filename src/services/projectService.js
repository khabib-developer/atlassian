import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://4596-84-54-71-18.ngrok.io/" }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: "getProjects",
      }),
    }),
  }),
});
