import UserController from '../controllers/UserController';
import auth from '../middleware/auth.middleware';

export default (router) => {
  router.post(`/api/auth/signUp`, UserController.SignUp);
  router.post(`/api/auth/signIn`, UserController.SignIn);
  router.get(`/api/user`, UserController.getAll);
  router.get(`/api/user/:id`, UserController.get);
  router.put(`/api/user/:id`, auth, UserController.update);
  router.delete(`/api/user/:id`, auth, UserController.delete);
};
