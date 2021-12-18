import { Request, Response, response } from 'express';
import database from '../../../core/data/connections/Database';

export default class ProductController {
   public async store(req: Request, res: Response) {
      try {
         const connection = database.getConnection();
         const { nome, descricao, categoria } = req.body;
         const result = await connection.manager.query();
      } catch (error) {
         response.status(500).send(`deu ruim`);
      }
   }

   public index() {
      try {
      } catch (error) {
         response.status(500).send(`deu ruim`);
      }
   }
}
