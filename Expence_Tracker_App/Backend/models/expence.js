const Sequelize=require('sequelize').Sequelize;

const sequelize= require('../util/database');

const expence = sequelize.define('expence', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    amount:Sequelize.INTEGER,
    description: {
        type:Sequelize.STRING
    },
    category: Sequelize.STRING

})
module.exports=expence;