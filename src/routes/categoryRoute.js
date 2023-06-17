import CategoryController from '../controllers/CategoryController';
import singleCsvUpload from '../middleware/uploadCsv.middleware';
import auth from '../middleware/auth.middleware';

export default (router) => {
  router.post(`/api/category`, auth, CategoryController.insert);
  router.post(
    `/api/category/csvUpload`,
    singleCsvUpload,
    CategoryController.insertCsvData,
  );
  router.get(`/api/category`, CategoryController.getAll);
  router.get(`/api/category/:id`, CategoryController.get);
  router.get(`/api/search/category`, CategoryController.search);
  router.put(`/api/category/:id`, auth, CategoryController.update);
  router.delete(`/api/category/:id`, auth, CategoryController.delete);
};
