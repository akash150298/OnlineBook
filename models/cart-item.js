import  Sequelize  from "sequelize";

import { sequelize } from "../util/database.js";

const CartItem = sequelize.define('cartItem', {
   id:{
     type: Sequelize.INTEGER,
     autoIncrement: true,
     allowNull: true,
     primaryKey: true
   },
   quantity: Sequelize.INTEGER
});
export {
  CartItem
};