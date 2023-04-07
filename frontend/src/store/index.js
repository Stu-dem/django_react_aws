import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { eventsApi } from "./apis/eventsApi";

export const store = configureStore({
  reducer: {
    [eventsApi.reducerPath]: eventsApi.reducer,
  },
  middleware: getDefaultMiddleware().concat(eventsApi.middleware),
});

setupListeners(store.dispatch);

export {
  useGetEventsQuery,
  useGetUpcomingEventsQuery,
  useGetPastEventsQuery,
} from "./apis/eventsApi";
