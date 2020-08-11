const express = require('express');
const morgan = require('morgan');
const app= express();

app.use(morgan('dev'));

app.get('/movie', (req,res)=>{
  const {genre, country, score} = req.query;
  
  res.status(200).send('hello');
});

app.listen(8000,() =>{
  console.log('app deployed on port 8000!');
});