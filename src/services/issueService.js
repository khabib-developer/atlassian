import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const issueApi = createApi({
  reducerPath: "issueApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://4596-84-54-71-18.ngrok.io/" }),
  endpoints: (builder) => ({
    getIssues: builder.query({
      query: (name) => ({
        url: `getIssues/${name}`,
      }),
    }),
  }),
});
