import authController from "../../../auth/authController";

export default async function usersAPI(req, res) {
  try {
    const { getUsers } = authController();
    getUsers(req, res);
  } catch (e) {
    console.log(e);
  };
}
