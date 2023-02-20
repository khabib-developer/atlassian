import { configureStore } from "@reduxjs/toolkit";
import toDo from "./reducers/toDo.js";
import { projectsApi } from "../services/projectService";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { issueApi } from "../services/issueService";

export const store = configureStore({
  reducer: {
    toDo,
    [projectsApi.reducerPath]: projectsApi.reducer,
    [issueApi.reducerPath]: issueApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(projectsApi.middleware)
      .concat(issueApi.middleware),
});

setupListeners(store.dispatch);
