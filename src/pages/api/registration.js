import authController from '../../auth/authController'

export default async function registrationAPI(req, res) {
  try {
    const { registration } = authController();
    registration(req, res);
  } catch (e) {
    console.log(e);
    console.log('registrationAPI  error');
    res.status(400).json({ message: 'registrationAPI error' });
  };
}
