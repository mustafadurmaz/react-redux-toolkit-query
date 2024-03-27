import { createSlice } from '@reduxjs/toolkit';
import { useGetPostsQuery } from '../../api/postsApi';

interface PostsState {
  posts: any[]; // Post türünü buraya eklemelisiniz
  loading: 'idle' | 'pending';
}

const initialState: PostsState = {
  posts: [],
  loading: 'idle',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type === useGetPostsQuery().fulfilled.type,
      (state, action) => {
        state.loading = 'idle';
        state.posts = action.payload;
      }
    );
  },
});

export const selectAllPosts = (state: { posts: PostsState }) => state.posts.posts;

export default postsSlice.reducer;