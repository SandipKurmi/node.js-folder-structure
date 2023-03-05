import express from 'express';
import userRoutes from './userRoute';
import categoryRoute from './categoryRoute';
import productRoute from './productRoute';

const router = express.Router();
userRoutes(router);
categoryRoute(router);
productRoute(router);

export default router;
