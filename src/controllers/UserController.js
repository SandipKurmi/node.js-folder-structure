import Controller from './Controller';
import { userService } from '../services/instanceIndex';

class UserController extends Controller {
  constructor(service) {
    super(service);
    this.SignUp = this.SignUp.bind(this);
    this.SignIn = this.SignIn.bind(this);
  }

  async SignUp(req, res) {
    let response = await this.service.SignUp(req);
    return res.status(response.statusCode).send(response);
  }

  async SignIn(req, res) {
    let response = await this.service.SignIn(req);
    return res.status(response.statusCode).send(response);
  }
}

export default new UserController(userService);
