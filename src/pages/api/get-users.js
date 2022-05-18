import authController from '../../auth/authController'

export default async function usersAPI(req, res) {
  try {
    authController().getUsers();
    res.status(200).json({ message: 'Список пользователей' });
  } catch (e) {
    console.log(e);
  };
}
