import Service from './Service';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserService extends Service {
  constructor(model) {
    super(model);
  }

  async SignUp(req) {
    try {
      const { userName, password } = req.body;

      if (!(userName && password)) {
        return {
          error: true,
          message: 'userName and phoneNumber are required',
          statusCode: 400,
          data: null,
        };
      }

      const existUser = await this.model.findOne({ userName: userName });
      if (existUser) {
        return {
          error: true,
          message: 'phoneNumber already exist',
          statusCode: 400,
          data: null,
        };
      }

      const saltRounds = 10;
      const hashPassword = bcrypt.hashSync(password, saltRounds);

      const payload = {
        userName,
        password: hashPassword,
      };
      const data = await this.model.create(payload);
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

  async SignIn(req) {
    try {
      const { userName, password } = req.body;

      if (!(userName && password)) {
        return {
          error: true,
          message: 'userName and phoneNumber are required',
          statusCode: 400,
          data: null,
        };
      }

      const user = await this.model.findOne({ userName: userName });
      if (!user) {
        return {
          error: true,
          message: 'userName not found',
          statusCode: 400,
          data: null,
        };
      }

      if (user.status === 'inactive') {
        return {
          error: true,
          message: 'Your account is inactive',
          statusCode: 400,
          data: null,
        };
      }

      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) {
        return {
          error: true,
          message: 'Incorrect password',
          statusCode: 400,
          data: null,
        };
      }

      // how to expire token 30 days
      const token = jwt.sign(
        { userId: user._id, userName: user.userName },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: '30d',
        },
      );

      return {
        error: false,
        message: 'successfully inserted',
        statusCode: 201,
        data: {
          user,
          token,
        },
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
