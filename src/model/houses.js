import sequelizeModule from "sequelize";
import sequelize from "../db.js";

const DataTypes = sequelizeModule.DataTypes;

export const House = sequelize.define(
  "house",
  {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    university: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    houseType: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    pricePerDay: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    images: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

export async function findAllHouse() {}

export async function findHouse(houseId) {}
