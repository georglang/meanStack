const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');

var db;

MongoClient.connect('connection-data', (err, database) => {
  if (err)
  {
    return console.log(err)
  }
  db = database

  app.listen(3000, () => {
    console.log('listening on 3000')
  })
});


app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req,res) => {
  db.collection('quotes').find().toArray(function(err, result) {
    res.render('index.ejs', {quotes: result});
  });
});

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err)
    {
      return console.log(err)
    }

    console.log('saved to database');
    res.redirect('/');
  })
});