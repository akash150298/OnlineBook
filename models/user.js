import {sequelize} from '../util/database.js'
import  Sequelize  from "sequelize";
const User = sequelize.define('user', {
 id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
 },
 name: Sequelize.STRING,
 email: Sequelize.STRING
});
export {
    User
};