import { UserService, CategoryService, ProductService } from './index';

import { User, Category, Product } from '../models';

export const userService = new UserService(new User().getInstance());
export const inscategoryService = new CategoryService(
  new Category().getInstance(),
);
export const insproductService = new ProductService(
  new Product().getInstance(),
);
