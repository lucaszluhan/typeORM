import { Connection, createConnection } from 'typeorm';

class Database {
   private static connection: Connection;

   public getConnection(): Connection {
      if (Database.connection == null || Database.connection == undefined) {
         throw new Error('CONEXAO_DATABASE_NAO_ABERTA');
      }
      return Database.connection;
   }

   public async openConnection(): Promise<void> {
      if (Database.connection == null || Database.connection == undefined) {
         try {
            Database.connection = await createConnection();
         } catch (error) {
            console.log(`ERRO CONECTAR NO BANCO =>`, { error });
         }
      }
   }
}

const database = new Database();

export default database;
