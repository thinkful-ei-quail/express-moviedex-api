
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const store = require('./store');

console.log(process.env.API_TOKEN);
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());


app.use(function validateBearerToken (req,res,next){
  const apiToken = process.env.API_TOKEN;
  const authToken = req.get('Authorization');
  if (!authToken || authToken.split(' ')[1] !== apiToken) {
    return res.status(401).json({ error: 'Unauthorized request'});
  }
  
  next();
});


// console.log(response.genre)
app.get('/movie', function handleGetMovies(req, res)  {
  let response = store;
  // const { genre, country, score } = req.query;console.log(req.query);  
  if (req.query.genre) {
    response = response.filter(movie => 
      // console.log(movie, "test movie")
      movie.genre.toLowerCase().includes(req.query.genre.toLowerCase())
      // console.log("test", response)
    );

  }

  if (req.query.country) {
    response = response.filter(movie => 
      // console.log(movie, "test movie")
      movie.country.toLowerCase().includes(req.query.country.toLowerCase())
      // console.log("test", response)
    );
  }
  if (req.query.avg_vote){
    response=response.filter(movie=>
      parseInt(movie.avg_vote)>=parseInt(req.query.avg_vote)
    );
  }
  res.json(response);
  


  // console.log(response)


});

app.listen(9080, () => {
  console.log('app deployed on port 9080!');
});


