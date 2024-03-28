import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Comment } from "../modals/comment.model";

export const commentApi = createApi({
  reducerPath: "commnetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    comments: builder.query<Comment[], void>({
      query: () => "/comments",
    }),
  }),
});

export const { useCommentsQuery } = commentApi;
