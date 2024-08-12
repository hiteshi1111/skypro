const mongoose = require("mongoose");
const Schema = mongoose.Schema

const blogsSchema = new Schema(
  {
    author: {
      type: String,
      required: true
  },
  title: {
      type: String,
      required: true
  },
  handle: {
      type: String,
      required: true
  },
  keyword: {
      type: String,
      required: true
  },
  metaTitle: {
      type: String,
      required: true
  },
  metaDescription: {
      type: String,
      required: true
  },
  publishedAt: {
      type: String,
      required: true
  },
  description: {
      type: String,
      required: true
  },
  image: {
      type: String,
      required: true
  },
  alttag: {
      type: String,
      required: true
  }, 
  imagetitle: {
      type: String,
      required: true
  },
  isDeleted: {
      type: Boolean,
      default: false,
  },
  isActive: {
      type: Boolean,
      default: true,
  }
  },{ timestamps: true}
);

const Blogs = mongoose.model("Blogs", blogsSchema);
module.exports = Blogs;