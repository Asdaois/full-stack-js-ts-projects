import express from 'express';
import {
  getUser,
  getProfile,
  getFriendList,
  getSearchResult,
  sendFriendRequest,
  handleFriendRequest,
  createNewUser,
  updateUser,
  deleteUser,
  getUserWithUid,
  getUserNotifications,
} from '../controllers/userController.js';

const userRouter = express.Router();

// -- USER ROUTES --

// Base route
userRouter.get('/:id', getUser);
// Get user with firebase uid
userRouter.get('/firebase/:uid', getUserWithUid);
// Profile route
userRouter.get('/profile/:id', getProfile);
// User friend list route
userRouter.get('/friends/:id', getFriendList);
// Search user
userRouter.get('/search/:name/:userUID', getSearchResult);
// Notifications
userRouter.get('/notifications/:userID', getUserNotifications);
// Send friend request route
userRouter.post('/request/:userID/:friendID', sendFriendRequest);
// Handle friend request route
userRouter.put('/request/:requestID/:choice', handleFriendRequest);
// Create new user route
userRouter.post('/create', createNewUser);
// Update user route
userRouter.put('/update', updateUser);
// Delete user route
userRouter.delete('/delete', deleteUser);

export default userRouter;
