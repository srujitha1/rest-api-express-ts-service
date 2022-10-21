import {ConnectionOptions} from 'typeorm';
import {User} from '../src/models/user.model';

const config : ConnectionOptions = {
  type: "mysql",
  host: process.env.MYSQL_HOST || "localhost",
  port: Number(process.env.MYSQL_PORT) || 3306,
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "root",
  database: process.env.MYSQL_DB || "usersdb",
  entities: [User],
  synchronize: true,
}

export default config