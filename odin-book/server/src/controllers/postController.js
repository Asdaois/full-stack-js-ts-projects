import mongoose from 'mongoose';
import Post from '../models/Post.js';

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export const getPosts = async (req, res, next) => {
  // Todo: Get more
  try {
    const lastPosts = await Post.find({ postType: 'Post' })
      .limit(10)
      .populate('userID')
      .populate({
        path: 'comments',
        populate: [{ path: 'userID' }, { path: 'comments', populate: { path: 'userID' } }],
      })
      .sort([['createdAt', 'descending']]);
    res.json(lastPosts);
  } catch (error) {
    next(error);
  }
};
/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getPost = async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findById(id)
    .populate({
      path: 'comments',
      populate: [{ path: 'userID' }, { path: 'comments', populate: { path: 'userID' } }],
    })
    .exec();
  if (post === null) {
    return res.json({ message: 'Post not found', status: 'deleted' });
  }
  return res.json(post);
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const createPost = async (req, res, next) => {
  //   const { userID, date, content } = req.params;

  const post = new Post({
    ...req.body,
  });
  try {
    await post.save();
    res.json({ message: 'Post created!' });
  } catch (err) {
    if (err) { return next(err); }
  }
};

/**
 * Create comment
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const createComment = async (req, res, next) => {
  try {
    // postType should be included in the body of the request
    const comment = new Post({
      ...req.body,
    });
    await comment.save();
    Post.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { comments: comment._id },
      },
      async (err, doc) => {
        if (err) return next(err);
        if (doc.postType === 'Post') {
          return res.json({ post: doc });
        }
        const post = await Post.findOne({ comments: doc._id }).exec();
        return res.json({ post });
      },
    );
  } catch (err) {
    if (err) return next(err);
  }
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const updatePost = async (req, res, next) => {
  //   const { content, postID } = req.params;

  //   try {
  //     const post = await Post.findById(postID).exec();
  //     post = {
  //       content,
  //     };
  //     await post.save();
  //     res.json({ message: `Post ${req.params.id} updated!` });
  //   } catch (err) {
  //     if (err) return next(err);
  //   }

  res.json({ message: `Post ${req.params.id} updated!` });
};

/**
 * Like a post
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const likePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userID } = req.body;

    const post = await Post.findById(id);
    if (post === null) {
      const error = new Error('Post not found');
      error.status = 404;
      return next(error);
    }

    const user = mongoose.Types.ObjectId(userID);
    const found = post.likedBy.find((value) => value.equals(user));

    if (found !== undefined) {
      const likes = post.likedBy.filter((value) => !value.equals(user));
      post.likedBy = likes;
    } else {
      post.likedBy.push(user);
    }

    await post.save();
    res.json(post);
  } catch (err) {
    if (err) return next(err);
  }
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id).exec();

    if (post === null) {
      const error = new Error('Post not found');
      error.status = 404;
      return next(error);
    }

    await post.remove((err) => {
      if (err) return next(err);
      return res.json({ message: 'Post deleted' });
    });
  } catch (err) {
    if (err) return next(err);
  }
};

export {
  createComment, createPost, deletePost, getPost, likePost, updatePost,
};
