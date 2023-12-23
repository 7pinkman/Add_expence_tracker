const Sequelize=require('sequelize').Sequelize;

const sequelize= require('../util/database');

const library = sequelize.define('library', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    name:Sequelize.STRING,
    taken:Sequelize.STRING,
    return:Sequelize.STRING,
    fine: Sequelize.INTEGER

})
module.exports=library;