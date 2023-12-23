const express= require('express');

const router = express.Router();

const libraryController=require('../controllers/library')
console.log('routes')

router.get('/get-library',libraryController.getLibrary4);

router.get('/get-library/:name',libraryController.getLibrary);

//router.delete('/delete-expence/:id',expenceController.deleteExpence);

module.exports=router;

