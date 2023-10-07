import User from '../models/User.js';
import Profile from '../models/Profile.js';
import FriendRequest from '../models/FriendRequest.js';
import Notifications from '../models/Notifications.js';

/**
 * @param {import("express").Request} req
 * @param {Response} res
 */
const getUser = (_req, res) => {
  // await User.find({ _id: req.params.id }).exec((err, result) => {
  //     if (err) {
  //       return next(err);
  //     }
  //     res.json({ result });
  //   });
  res.status(200).json({ message: 'User Index' });
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getProfile = (_req, res) => {
  // await Profile.find({ _id: req.params.id }).exec((err, result) => {
  //     if (err) {
  //       return next(err);
  //     }
  //     res.json({ result });
  //   });
  res.status(200).json({ message: 'User Profile' });
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getFriendList = (_req, res) => {
  // await Profile.find({ _id: req.params.id })
  //   .select("friends")
  //   .populate({
  //     path: "User",
  //     select: ["firstName", "lastName", "gender"],
  //   });
  res.status(200).json({ message: "User's friends" });
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getSearchResult = async (req, res) => {
  const { name, userUID } = req.params;

  const result = await User.find({
    uid: { $not: { $regex: userUID } },
    $or: [{ firstName: { $regex: name } }, { lastName: { $regex: name } }],
  })
    .select(['firstName', 'lastName'])
    .exec();
  res.json({ message: `searched ${name}`, result });
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const sendFriendRequest = async (req, res, next) => {
  const { userID, friendID } = req.params;

  try {
    const result = await FriendRequest.findOne({
      requestingUserID: userID,
      receivingUserID: friendID,
    }).exec();

    if (!result) {
      const friendRequest = new FriendRequest({
        requestingUserID: userID,
        receivingUserID: friendID,
        status: 'Pending',
      });

      await friendRequest.save();
      res.json({ message: `Request sent to ${friendID} from ${userID}` });
    } else {
      res.json({ message: 'Friend request already sent' });
    }
  } catch (err) {
    next(err);
  }
};

/**
 * Accept friend request
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const handleFriendRequest = async (req, res, next) => {
  try {
    const { requestID, choice } = req.params;
    const request = await FriendRequest.findById(requestID);
    request.status = choice;
    await request.save();

    await Profile.findByIdAndUpdate(request.receivingUserID, {
      $addToSet: { friends: request.requestingUserID },
    }).exec();

    await Profile.findByIdAndUpdate(request.requestingUserID, {
      $addToSet: { friends: request.receivingUserID },
    }).exec();

    res.json({ message: `Request ${choice}` });
  } catch (err) {
    next(err);
  }
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const createNewUser = async (req, res, next) => {
  const { displayName, uid } = req.body;

  let user = null;

  if (uid) user = await User.findOne({ uid });

  if (displayName !== undefined && !user) {
    const splitName = displayName.split(' ');
    const firstName = splitName[0];
    const lastName = splitName[1] || '   '; // TODO: hotfix @LuisDanielCova technical debt

    try {
      const createdUser = new User({ ...req.body, firstName, lastName });
      await createdUser.save();
      res.json({ message: 'User created' });
    } catch (err) {
      next(err);
    }
  } else {
    res.json({ message: 'Error creating the user' });
  }
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const updateUser = async (_req, res) => {
  // const {
  //   firstName,
  //   lastName,
  //   dateOfBirth,
  //   email,
  //   password,
  //   gender,
  // } = req.body;
  // try {
  //   const user = await User.findOne({ _id: req.params.id }).exec();
  //   user = {
  //     firstName,
  //     lastName,
  //     dateOfBirth,
  //     email,
  //     password,
  //     gender,
  //   };
  //   await user.save();
  //   res.json({ message: "User created" });
  // } catch (err) {
  //   next(err);
  // }
  res.status(200).json({ message: 'User updated' });
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const deleteUser = async (_req, res) => {
  // await User.findOneAndDelete({ _id: req.params.id }, (err) => {
  //   if (err) {
  //     return next(err);
  //   }
  //   res.json({ message: "User deleted" });
  // });
  res.status(200).json({ message: 'User deleted' });
};

/**
 * Get User With firebase uid
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getUserWithUid = async (req, res, next) => {
  try {
    const user = await User.findOne({ uid: req.params.uid });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

/**
 * Get user notifications
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getUserNotifications = async (req, res, next) => {
  try {
    const { userID } = req.params;
    const notifications = await Notifications.find({ userID }).exec();
    return res.json({ notifications });
  } catch (err) {
    next(err);
  }
};

export {
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
};
