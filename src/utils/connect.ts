import { ConnectionOptions, createConnection } from "typeorm";
import logger from './logger';

export async function connecttoDatabase(dbConfig: ConnectionOptions){
  try{
    await createConnection(dbConfig);
    logger.info("Connected to DB");
  } catch(error){
      logger.error("Could not connect to DB");
  }
}