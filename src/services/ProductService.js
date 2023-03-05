import Service from './Service';

class ProductService extends Service {
  constructor(model) {
    super(model);
  }

  async getAllProduct(req) {
    try {
      const items = await this.model
        .find({})
        .populate('user_id')
        .populate('category_id')
        .select(['-password']);
      const total = await this.model.countDocuments();

      return {
        error: false,
        message: 'request successfullly',
        statusCode: 200,
        total,
        data: items,
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }
}
export default ProductService;
