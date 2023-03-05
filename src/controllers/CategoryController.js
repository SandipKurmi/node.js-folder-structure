import Controller from './Controller';
import { categoryService } from '../services/modelIndex';

class CategoryController extends Controller {
  constructor(service) {
    super(service);
  }
}

export default new CategoryController(categoryService);
