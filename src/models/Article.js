import { Schema, model } from 'mongoose';

// const articleSchema = new Schema({
//   title: {type: String, unique: true, required: true},
//   time : { type : Date, default: Date.now },
//   text: {type: String, required: true},
//   images: [{type: String}]
// });

// const Article = model('Article', articleSchema);

// export { Article };

let Article;

const getArticleModel = () => {

  if (Article) { return Article }
  const articleSchema = new Schema({
    title: { type: String, unique: true, required: true },
    time: { type: Date, default: Date.now },
    text: { type: String, required: true },
    images: [{ type: String }]
  });

  Article = model('Article', articleSchema);

  return Article;
}

export { getArticleModel };
