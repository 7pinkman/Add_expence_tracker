const express= require('express');

const bodyParser=require('body-parser');

const sequelize=require('./util/database');

const app=express();

const expenceModel= require('./models/expence');

const expenceRoutes=require('./routes/expence');

var cors=require('cors');

app.use(cors());

app.use(bodyParser.json({ extended: false}));

app.use('/expense',expenceRoutes);

sequelize.sync()
         .then(() => {
            console.log('database synchronized');
         })
         .catch(err => {
            console.log('error synchronizing the database');
         });

app.listen(3000);