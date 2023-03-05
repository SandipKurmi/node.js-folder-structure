import Controller from './Controller';
import { productService } from '../services/modelIndex';

class ProductController extends Controller {
  constructor(service) {
    super(service);
    this.getAllProduct = this.getAllProduct.bind(this);
  }
  async getAllProduct(req, res) {
    let response = await this.service.getAllProduct(req);
    return res.status(response.statusCode).send(response);
  }
}

export default new ProductController(productService);
