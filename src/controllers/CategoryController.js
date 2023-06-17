import Controller from './Controller';
import { categoryService } from '../services/modelIndex';

class CategoryController extends Controller {
  constructor(service) {
    super(service);
    this.insertCsvData = this.insertCsvData.bind(this);
    this.search = this.search.bind(this);
  }

  async insertCsvData(req, res) {
    let response = await this.service.insertCsvData(req);
    return res.status(response.statusCode).send(response);
  }

  async search(req, res) {
    let response = await this.service.search(req);
    return res.status(response.statusCode).send(response);
  }
}

export default new CategoryController(categoryService);
