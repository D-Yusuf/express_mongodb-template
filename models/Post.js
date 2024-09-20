const { model, Schema } = require('mongoose');

const PostSchema = new Schema({
  username: {type: String, default: "Anonymous"},
  title: {type: String, uppercase: true, required: [true, "Title required!"]},
  body: {type: String, required: [true, "Post Content required!"]},
  image : {type: String}
});

module.exports = model('Post', PostSchema);
