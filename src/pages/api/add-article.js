import authController from "../../auth/authController";

export default async function addArticleAPI(req, res) {
  try {
    const { addArticle } = authController();
    addArticle(req, res);
  } catch (e) {
    console.log(e);
    console.log('AddArticleAPI  error');
    res.status(400).json({ message: 'AddArticleAPI error' });
  };
}
