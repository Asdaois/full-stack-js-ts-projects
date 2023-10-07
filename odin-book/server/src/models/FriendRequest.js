import pkg from "mongoose";
const { Schema, model } = pkg;
import Notifications from "./Notifications.js";
import User from "./User.js";
import Profile from "./Profile.js";

const FriendRequestSchema = new Schema({
  requestingUserID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  receivingUserID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  status: {
    type: String,
    required: true,
    enum: ["Accepted", "Rejected", "Pending"],
    default: "Pending",
  },
});

FriendRequestSchema.post("save", async (doc) => {
  if (doc.status === "Pending") {
    // Sending a notification
    const result = await User.findById(doc.requestingUserID).exec();

    const notification = new Notifications({
      userID: doc.receivingUserID,
      subject: "New Friend Request!",
      message: `You've received a friend request from: ${result.firstName} ${result.lastName}! Do you want to accept it?`,
      type: "FriendRequest",
      typeID: doc._id,
    });

    await notification.save();
  } else if (doc.status === "Accepted") {
    const notification = await Notifications.findOne({
      type: "FriendRequest",
      typeID: doc._id,
    }).exec();

    // Updating Notification
    const result = await User.findById(doc.requestingUserID).exec();
    notification.subject = "Friend Request";
    notification.message = `You've accepted a friend request from: ${result.firstName} ${result.lastName}!`;
    notification.read = true;
    await notification.save();
  } else if (doc.status === "Rejected") {
    // Deleting the notification
    const notification = await Notifications.findOne({
      type: "FriendRequest",
      typeID: doc._id,
    }).exec();
    await notification.delete();
  }
});

const FriendRequest = model("FriendRequest", FriendRequestSchema);

export default FriendRequest;
