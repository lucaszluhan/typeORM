import express, { Request, Response } from 'express';
import cors from 'cors';
import CategoryRoutes from './features/categories/routes/categoryRoutes';
import 'reflect-metadata';
import database from './core/data/connections/Database';

const app = express();

app.use(express.json());
app.use(cors());

const categoryRoutes = new CategoryRoutes().init();
app.use(categoryRoutes);

// const productRoutes = new ProductRoutes().init();
// app.use(productRoutes);

// const stockRoutes = new StockRoutes().init();
// app.use(stockRoutes);

app.get('/', (request: Request, response: Response) => {
   return response.send('ok');
});

const port = process.env.PORT || 5050;
database.openConnection().then(() => app.listen(port, () => console.log(`app rodando na porta ${port}`)));
