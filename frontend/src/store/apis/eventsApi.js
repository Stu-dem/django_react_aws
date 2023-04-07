import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

console.log(import.meta.env.VITE_REACT_APP_API_URL);

export const eventsApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_API_URL + "events",
  }),
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => "/",
    }),
    getUpcomingEvents: builder.query({
      query: () => "/upcoming",
    }),
    getPastEvents: builder.query({
      query: () => "/past",
    }),
  }),
});

export const {
  useGetEventsQuery,
  useGetUpcomingEventsQuery,
  useGetPastEventsQuery,
} = eventsApi;
