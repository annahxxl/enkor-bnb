import sequelizeModule from "sequelize";
import sequelize from "../db.js";

const DataTypes = sequelizeModule.DataTypes;

export const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

export async function createUser(user) {}

export async function findUserById(userId) {}
