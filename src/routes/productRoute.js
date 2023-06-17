import ProductController from '../controllers/ProductController';
import auth from '../middleware/auth.middleware';
export default (router) => {
  router.post(`/api/product`, auth, ProductController.insert);
  router.get(`/api/product`, ProductController.getAllProduct);
  router.get(`/api/product/:id`, ProductController.get);
  router.put(`/api/product/:id`, auth, ProductController.update);
  router.delete(`/api/product/:id`, auth, ProductController.delete);
};
