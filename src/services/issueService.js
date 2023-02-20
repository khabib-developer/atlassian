import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const issueApi = createApi({
  reducerPath: "issueApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://arcane-reaches-09678.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getIssues: builder.query({
      query: (name) => ({
        url: `getIssues/${name}`,
      }),
    }),
  }),
});
