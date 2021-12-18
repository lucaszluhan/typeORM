import { Router } from 'express';
import CategoryController from '../controllers/categoryControllers';

export default class CategoryRoutes {
   public init(): Router {
      const routes = Router();
      const controller = new CategoryController();
      routes.post('/categories', controller.store);
      routes.get('/categories', controller.index);
      routes.put('/categories/:id', controller.update);
      routes.delete('/categories/:id', controller.delete);
      return routes;
   }
}
