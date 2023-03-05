import ProductController from '../controllers/ProductController';

export default (router) => {
  router.post(`/api/product`, ProductController.insert);
  router.get(`/api/product`, ProductController.getAllProduct);
  router.get(`/api/product/:id`, ProductController.get);
  router.put(`/api/product/:id`, ProductController.update);
  router.delete(`/api/product/:id`, ProductController.delete);
};
