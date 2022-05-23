const mongoose = require('mongoose')
const { Schema, model } = mongoose

const postSchema = new Schema({
  username: {type: String, ref: 'User', required: true},
  time : { type : Date, default: Date.now },
  text: {type: String, required: true},
});

const PostModel = mongoose.models.Post || model('Post', postSchema);

export { PostModel };
