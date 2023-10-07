import pkg from "mongoose";
const { Schema, model } = pkg;

// Para pruebas
// Aun no esta decidido si se usara en el producto final

const NewsSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Post",
    },
  ],
});

const News = model("News", NewsSchema);

export default News;
