import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    phone_number: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || model("User", UserSchema);
