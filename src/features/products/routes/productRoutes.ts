import { Router } from 'express';

export default class ProductRoutes {
   public init(): Router {
      const routes = Router();
      const controller = new ProductController();
      routes.post('product', controller.store);
      routes.get('product', controller.index);
   }
}
