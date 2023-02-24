import  Sequelize  from "sequelize";

import { sequelize } from "../util/database.js";

const OrderItem = sequelize.define('orderItem', {
   id:{
     type: Sequelize.INTEGER,
     autoIncrement: true,
     allowNull: true,
     primaryKey: true
   },
   quantity: Sequelize.INTEGER
});
export {
  OrderItem
};