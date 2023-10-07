import { createAsyncThunk } from '@reduxjs/toolkit'

import { postApi } from '../../api/postApi'

export const getLastPosts = createAsyncThunk('posts/getLasts', async () => {
  const posts = await postApi.getLasts()
  return posts
})

export const createPost = createAsyncThunk('post/create', async ({ post }, thunkAPI) => {
  await postApi.create(post)
  thunkAPI.dispatch(getLastPosts())
})

export const postLiked = createAsyncThunk('post/liked', async ({ postID, userID }) => {
  const response = await postApi.like(postID, userID)
  return response
})

export const addCommentToPost = createAsyncThunk(
  'post/addComment',
  async ({ postID, comment }, thunkAPI) => {
    const response = await postApi.createComment(postID, comment)
    thunkAPI.dispatch(getLastPosts())
    return response
  }
)
