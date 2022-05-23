import { Schema, model } from 'mongoose';

// const articleSchema = new Schema({
//   title: {type: String, unique: true, required: true},
//   time : { type : Date, default: Date.now },
//   text: {type: String, required: true},
//   images: [{type: String}]
// });

// const Article = model('Article', articleSchema);

// export { Article };

let articleModel;

const getArticleModel = () => {

  if (articleModel) { return articleModel }
  const articleSchema = new Schema({
    title: { type: String, unique: true, required: true },
    time: { type: Date, default: Date.now },
    text: { type: String, required: true },
    images: [{ type: String }]
  });

  articleModel = model('Article', articleSchema);

  return articleModel;
}

export { getArticleModel };
