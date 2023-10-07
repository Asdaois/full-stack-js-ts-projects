import { createSlice } from '@reduxjs/toolkit'

import { addCommentToPost, getLastPosts, postLiked } from './posts.thunks'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: { lasts: [] },
  reducers: {},
  extraReducers: {
    [getLastPosts.fulfilled]: (state, action) => {
      state.lasts = action.payload
    },
    [addCommentToPost.fulfilled]: (state, action) => {},
    [postLiked.fulfilled]: (state, action) => {
      state.lasts = state.lasts.map((post) => {
        if (post._id === action.payload._id) {
          post.likedBy = action.payload.likedBy
        }
        return post
      })
    }
  }
})

export default postsSlice.reducer
