import UserController from '../controllers/UserController';

export default (router) => {
  router.get(`/api/user`, UserController.getAll);
  router.post(`/api/user`, UserController.SignUp);
  router.get(`/api/user/:id`, UserController.get);
  router.put(`/api/user/:id`, UserController.update);
  router.delete(`/api/user/:id`, UserController.delete);
};
