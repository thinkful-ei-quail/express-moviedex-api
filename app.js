const express = require('express');
const morgan = require('morgan');
const store = require('./store');
//const cors = require('cors');
// let response = [...store];
const app = express();
// console.log(response)
app.use(morgan('dev'));




// console.log(response.genre)
app.get('/movie', (req, res) => {
  let response = store;
  // const { genre, country, score } = req.query;

  if (req.query.genre) {
    response = response.filter(movie => {
      //console.log(movie, 'test movie');
      movie.genre.toLowerCase().includes(req.query.genre.toLowerCase());
      //console.log('test', response);
    });
    //return response;
  }

  if (req.query.country) {
    response = response.filter(movie => {
      //console.log(movie, 'test movie');
      movie.country.toLowerCase().includes(req.query.country.toLowerCase());
      //console.log('test', response);
    });
    
  }
  res.json(response);
});

app.listen(9000, () => {
  console.log('app deployed on port 8000!');
});