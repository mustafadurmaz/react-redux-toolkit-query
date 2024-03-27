import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Comment } from "../modals/comment.model";

const commentApi=createApi({
    baseQuery:fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com/"}),
    endpoints:(builder)=>({
        comments:builder.query<Comment[],void>({
            query:()=>"/comments"
        })
    })
})

export const {useCommentsQuery}=commentApi;