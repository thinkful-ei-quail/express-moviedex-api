
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const store = require('./store');
const cors = require('cors');
// let response = [...store];
const app = express();
// console.log(response)
app.use(morgan('dev'));




// console.log(response.genre)
app.get('/movie', (req, res) => {
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
      parseInt(movie.avg_vote)===parseInt(req.query.avg_vote)
    );
  }
  res.json(response);
  


  // console.log(response)


});

app.listen(9080, () => {
  console.log('app deployed on port 8000!');
});


