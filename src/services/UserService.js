import Service from './Service';

class UserService extends Service {
  constructor(model) {
    super(model);
  }

  async SignUp(req) {
    try {
      const data = await this.model.create(req.body);
      return {
        error: false,
        message: 'successfully inserted',
        statusCode: 201,
        data: data,
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

export default UserService;
