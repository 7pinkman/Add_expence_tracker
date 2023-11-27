const sequelize = require('../util/database');

const expence=require('../models/expence');

const addExpence = async (req, res, next ) => {
    const amount= req.body.amount;
    const description=req.body.description;
    const category=req.body.category;

    const data= await expence.create({amount: amount, description: description, category: category});
    res.status(201).json({expences: data});
}

const getExpence = async (req, res, next) => {
    console.log('get');
    const expences= await expence.findAll();
    res.status(201).json({expences: expences});
}

const deleteExpence = async (req, res, next) => {
    console.log('delete');
    const uId= req.params.id;
    await expence.destroy({where : {id:uId}})
    res.sendStatus(200);

}

module.exports={
    addExpence,
    getExpence,
    deleteExpence
}