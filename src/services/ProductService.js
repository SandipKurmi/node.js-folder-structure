import Service from './Service';

class ProductService extends Service {
  constructor(model) {
    super(model);
  }
  async getAllProduct(req) {
    try {
      let { skip, limit } = req.query;
      skip = skip ? Number(skip) : 1;
      limit = limit ? Number(limit) : 10;
      skip = (skip - 1) * limit;

      // Define the query variable here
      const query = req.query;

      // add search query
      if (query.search) {
        const searchValue = query.search;
        const searchRegex = new RegExp(searchValue, 'i');

        query.$or = [
          { name: { $regex: searchRegex } },
          { description: { $regex: searchRegex } },
          { color: { $regex: searchRegex } },
          { size: { $regex: searchRegex } },
        ];
        delete query.search;
      }

      // Remove the skip and limit properties from the query
      delete query.skip;
      delete query.limit;

      //not get inactives data
      query.status = { $ne: 'inactive' };

      const items = await this.model
        .find(query) // Apply the query to filter the data
        .populate('user_id')
        .populate('category_id')
        .select(['-password'])
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 });
      const total = await this.model.countDocuments(query); // Also apply the query to count the total documents

      return {
        error: false,
        message: 'Request successful',
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
