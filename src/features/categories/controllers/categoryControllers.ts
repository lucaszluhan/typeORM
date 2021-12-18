import { Request, Response } from 'express';
import database from '../../../core/data/connections/Database';

export default class CategoryController {
   public async store(req: Request, res: Response) {
      try {
         const connection = database.getConnection();
         const { nome, descricao, tag } = req.body;
         const result = await connection.manager.query(`insert into typeorm_exercicio.categoria (nome,descricao,tag) values ($1,$2,$3)`, [nome, descricao, tag]);
         console.log(result);
         res.status(200).send(`Categoria criada.`);
      } catch (error) {
         console.log(`Erro ao criar categoria.`, { error });
         res.status(500).send(`Erro de servidor ao criar categoria.`);
      }
   }

   public async index(req: Request, res: Response) {
      try {
         const connection = database.getConnection();
         const categories = await connection.manager.query(`select * from typeorm_exercicio.categoria`);
         console.log(categories);
         res.status(200).send(categories);
      } catch (error) {
         res.status(500).send({ error });
      }
   }

   public async update(req: Request, res: Response) {
      try {
         let id = req.params.id;
         let { nome, descricao, tag } = req.body;
         const connection = database.getConnection();
         console.log(id);
         let updateTable = await connection.manager.query(`
            update typeorm_exercicio.categoria
            set nome = ${nome}, descricao = ${descricao}, tag = ${tag}
            where id = '${id}';
            `);
         console.log(updateTable);
         res.status(200).send(`categoria atualizada`);
      } catch (error) {
         console.log({ error });
         res.status(500).send(`erro ao editar categoria`);
      }
   }

   public async delete(req: Request, res: Response) {
      try {
      } catch (error) {
         res.status(500).send(`erro ao deletar categoria`);
      }
   }
}
