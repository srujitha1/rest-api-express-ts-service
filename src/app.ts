import express from 'express';
import config from 'config';
import logger from './utils/logger';
import Router from './routes/routes';
import swaggerUi from "swagger-ui-express";
import { createConnection } from "typeorm";
import dbConfig from "../config/database";

const PORT = config.get<number>('port');

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
      },
    })
);

app.use(Router);

app.listen(PORT, async () => {
  try{
    await createConnection(dbConfig);
    logger.info("Connected to db");
  } catch(err){
    logger.error("Unable to connect to db");
  }
  logger.info("App is running");
});