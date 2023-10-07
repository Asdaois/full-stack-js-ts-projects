import express from 'express';
import {
  getPost,
  createPost,
  createComment,
  updatePost,
  likePost,
  deletePost,
  getPosts,
} from '../controllers/postController.js';

const postRouter = express.Router();

// -- POST ROUTES --

postRouter.get('/', getPosts);
// Base route
postRouter.get('/:id', getPost);
// Create route
postRouter.post('/create', createPost);
// Create comment route
postRouter.put('/comment/:id', createComment);
// Update route
postRouter.put('/update/:id', updatePost);
// Like route
postRouter.put('/like/:id', likePost);
// Delete route
postRouter.delete('/delete/:id', deletePost);

export default postRouter;
