

const Cart = sequelize.define('cart', {
   id:{
     type: Sequelize.INTEGER,
     autoIncrement: true,
     allowNull: true,
     primaryKey: true
   }
});
export {
  Cart
};