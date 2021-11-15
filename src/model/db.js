import sequelizeModule from "sequelize";
import config from "../config.js";

const { host, user, database, password } = config.db;

const sequelize = new sequelizeModule.Sequelize(database, user, password, {
  host,
  dialect: "mysql",
  logging: false,
});

export default sequelize;
