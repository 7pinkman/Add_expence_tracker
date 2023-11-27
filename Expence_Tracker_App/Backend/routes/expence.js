const express= require('express');

const router = express.Router();

const expenceController=require('../controllers/expence')
console.log('routes')

router.post('/add-expence',expenceController.addExpence);

router.get('/get-expence',expenceController.getExpence);

router.delete('/delete-expence/:id',expenceController.deleteExpence);

module.exports=router;

