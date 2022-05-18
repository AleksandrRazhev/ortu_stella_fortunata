import {Schema, model} from 'mongoose';

const postSchema = new Schema({
  username: {type: String, ref: 'User', required: true},
  time : { type : Date, default: Date.now },
  text: {type: String, required: true},
});

const Post = model('Post', postSchema);

export { Post };
