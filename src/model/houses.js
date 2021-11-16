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
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    university: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    houseType: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    pricePerDay: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    images: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export async function findAll() {
  return House.findAll();
}

export async function findById(id) {
  return House.findByPk(id);
}
