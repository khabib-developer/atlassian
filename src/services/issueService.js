import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const issueApi = createApi({
  reducerPath: "issueApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dry-wave-94859.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getIssues: builder.query({
      query: (name) => ({
        url: `getIssues/${name}`,
      }),
    }),
  }),
});
