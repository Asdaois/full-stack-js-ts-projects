import mongoose, { Schema } from "mongoose";

const MachineryTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.MachineryType ||
  mongoose.model("MachineryType", MachineryTypeSchema);
