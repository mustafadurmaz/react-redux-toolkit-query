import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Comment } from "../modals/comment.model";

export const commentsApi = createApi({
  reducerPath: "commnetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    comments: builder.query<Comment[], void>({
      query: () => "/comments",
    }),
    comment: builder.query<Comment, string>({
      query: (id) => `/comments/${id}`
    })
  }),
});

export const { useCommentsQuery, useCommentQuery } = commentsApi;
