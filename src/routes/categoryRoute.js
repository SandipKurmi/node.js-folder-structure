import CategoryController from '../controllers/CategoryController';
import singleCsvUpload from '../middleware/uploadCsv.middleware';

export default (router) => {
  router.post(`/api/category`, CategoryController.insert);
  router.post(
    `/api/category/csvUpload`,
    singleCsvUpload,
    CategoryController.insertCsvData,
  );
  router.get(`/api/category`, CategoryController.getAll);
  router.get(`/api/category/:id`, CategoryController.get);
  router.put(`/api/category/:id`, CategoryController.update);
  router.delete(`/api/category/:id`, CategoryController.delete);
};
