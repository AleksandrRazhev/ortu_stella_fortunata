const mongoose = require('mongoose')
const { Schema, model } = mongoose

const articleSchema = new Schema({
  title: {type: String, unique: true, required: true},
  time : { type : Date, default: Date.now },
  text: {type: String, required: true},
  images: [{type: String}]
});

const ArticleModel = mongoose.models.Article || model('Article', articleSchema);

export { ArticleModel };
