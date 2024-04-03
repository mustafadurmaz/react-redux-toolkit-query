import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Comment } from "../modals/comment.model";

export const commentsApi = createApi({
  reducerPath: "commnetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Comment"],
  endpoints: (builder) => ({
    comments: builder.query<Comment[], void>({
      query: () => "/comments",
      providesTags: ["Comment"],
    }),
    comment: builder.query<Comment, string>({
      query: (id) => `/comments/${id}`,
      providesTags: ["Comment"],
    }),
    addComment: builder.mutation<void, Comment>({
      query: comment=>({
        url:"/comments",
        method: "POST",
        body: comment
      }),
      invalidatesTags: ["Comment"],
    }),
    updateComment: builder.mutation<void, Comment>({
      query: ({id,...rest})=>({
        url:`/comments/${id}`,
        method: "PUT",
        body: rest
      }),
      invalidatesTags: ["Comment"],
    }),
    deleteComment: builder.mutation<void, Comment>({
      query: (id)=>({
        url:`/comments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Comment"],
    })
  }),
});

export const { useCommentsQuery, useCommentQuery, useAddCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation } = commentsApi;
