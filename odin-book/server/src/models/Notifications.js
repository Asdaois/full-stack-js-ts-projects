import pkg from "mongoose";
const { Schema, model } = pkg;

const NotificationSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["FriendRequest", "Post", "Like", "Comment"],
    required: true,
  },
  typeID: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  read: {
    type: Boolean,
    default: false,
  },
});

const Notifications = model("Notifications", NotificationSchema);

export default Notifications;
