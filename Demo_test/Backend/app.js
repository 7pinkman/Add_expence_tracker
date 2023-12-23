const express= require('express');

const bodyParser=require('body-parser');

const sequelize=require('./util/database');

const app=express();

const libraryModel= require('./models/library');

const libraryRoutes=require('./routes/library');

var cors=require('cors');

app.use(cors());

app.use(bodyParser.json({ extended: false}));

app.use('/library',libraryRoutes);

sequelize.sync()
         .then(() => {
            console.log('database synchronized');
         })
         .catch(err => {
            console.log('error synchronizing the database');
         });

app.listen(3000);