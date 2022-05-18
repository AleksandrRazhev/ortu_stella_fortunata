const db = require('./db.json');
import authController from '../../auth/authController'

export default async function Http(req, res) {
  try {
    const result = await db;

    authController().getArticles();
    res.status(200).send(JSON.stringify(result));
  } catch (e) {
    res.status(500).send(`failed to fetch data: ${e}`);
  }
}
