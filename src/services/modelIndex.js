import { UserService, CategoryService, ProductService } from './index';

import { User, Category, Product } from '../models';

export const userService = new UserService(new User().getModel());
export const categoryService = new CategoryService(new Category().getModel());
export const productService = new ProductService(new Product().getModel());
