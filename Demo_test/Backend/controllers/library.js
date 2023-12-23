const sequelize = require('../util/database');

const library=require('../models/library');



const getLibrary = async (req, res, next) => {
    console.log('get');
    const name= req.params.name;
    const book= await library.findOne({
        where: { name: name }
    });
    res.status(201).json(book);
}
const getLibrary4 = async (req, res, next) => {
    console.log('get');
    const name= req.params.name;
    const book= await library.findAll();
    res.status(201).json(book);
}
/*
const deleteExpence = async (req, res, next) => {
    console.log('delete');
    const uId= req.params.id;
    await expence.destroy({where : {id:uId}})
    res.sendStatus(200);

}
*/

module.exports={
    getLibrary,
    getLibrary4
}