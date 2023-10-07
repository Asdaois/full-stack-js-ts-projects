import mongoose, { Schema, model } from "mongoose";

export const possiblesStatus = ["Damaged", "Maintenance", "Available", "Rented"]

const MachinerySchema = new Schema(
  {
    machine_type: {
      type: Schema.Types.ObjectId,
      ref: "MachineryType",
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Damaged", "Maintenance", "Available", "Rented"],
      default: "Available",
    },
    serial: {
      type: String,
      required: true,
      unique: true,
    },
    details: {
      type: String,
      required: true,
    },
    prize: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Machinery || model("Machinery", MachinerySchema);
