import mongoose, { Schema, model, models } from "mongoose";

const RentalSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    machinery_rented: [
      {
        type: Schema.Types.ObjectId,
        ref: "Machinery",
        required: true,
      },
    ],
    init_date: {
      type: Date,
      required: true,
    },
    due_date: {
      type: Date,
    },
    status: {
      type: String,
      required: true,
      enum: ["Active", "Paying", "Finished"],
      default: "Available",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Rental || model("Rental", RentalSchema);
