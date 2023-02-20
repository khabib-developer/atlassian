import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const issueApi = createApi({
  reducerPath: "issueApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://relaxed-wing.80-80-218-230.plesk.page/",
  }),
  endpoints: (builder) => ({
    getIssues: builder.query({
      query: (name) => ({
        url: `getIssues/${name}`,
      }),
    }),
  }),
});
