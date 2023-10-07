import pkg from "mongoose";
const { Schema, model } = pkg;

const PostSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    content: {
      image: String,
      text: String,
    },
    comments: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    likedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    postType: {
      type: String,
      enum: ["Post", "Comment", "SubComment"],
      required: true,
      default: "Post",
    },
  },
  { timestamps: true }
);

PostSchema.post("remove", async (doc) => {
  if (doc.postType !== "SubComment" && doc.comments.length > 0) {
    doc.comments.forEach(async (comment) => {
      const c = await Post.findById(comment._id).exec();
      if (c !== null) await c.remove();
    });
  }

  if (doc.postType !== "Post") {
    const post = await Post.findOne({ comments: doc._id });
    await Post.findByIdAndUpdate(post._id, {
      $pull: { comments: doc._id },
    });
  }
});

const Post = model("Post", PostSchema);

export default Post;
