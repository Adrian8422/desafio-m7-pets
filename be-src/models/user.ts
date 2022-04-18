import { Model, DataTypes } from "sequelize";
import { sequelize } from "./connection";

export class User extends Model {}

User.init(
  {
    fullname: DataTypes.STRING,
    bio: DataTypes.STRING,
    pictureURL: DataTypes.STRING,
  },
  { sequelize, modelName: "user" }
);
