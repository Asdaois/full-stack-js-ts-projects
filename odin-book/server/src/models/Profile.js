import pkg from "mongoose";
const { Schema, model } = pkg;

const ProfileSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  bio: { type: String },
  details: {
    work: String,
    city: String,
    relationships: [
      {
        userID: Schema.Types.ObjectId,
        type: String,
      },
    ],
    Education: String,
  },
  hobbies: { type: String },
  profilePic: { type: String },
  bannerPic: { type: String },
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Profile = model("Profile", ProfileSchema);

export default Profile;
