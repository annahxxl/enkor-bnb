import sequelizeModule from "sequelize";
import sequelize from "../db.js";
import { House } from "./houses.js";
import { User } from "./users.js";

const DataTypes = sequelizeModule.DataTypes;

export const Reservation = sequelize.define(
  "reservation",
  {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER(11),
      references: {
        model: User,
        key: "id",
      },
    },
    houseId: {
      type: DataTypes.INTEGER(11),
      references: {
        model: House,
        key: "id",
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

export async function createReservation(reservation) {}

export async function findAllReservation(userId) {}
