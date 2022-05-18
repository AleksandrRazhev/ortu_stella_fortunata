import authController from '../../auth/authController'

export default async function loginAPI(req, res) {
  try {
    const { login } = authController();
    login(req, res);
  } catch (e) {
    console.log(e);
    console.log('loginAPI error');
    res.status(400).json({ message: 'loginAPI error' });
  };
}
