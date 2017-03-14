const express = require('express');
const app = express();
const Router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const DiaryEntries = require('./models/diary.js');
const port = 3000;



// get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(function (req, res, next) {
  console.log('Something is happening');
  next();
});


// Router.route() to handle multiple routes for the same URI
Router.route('/diary')
  .post(function (req, res) {
    var diaryEntry = new DiaryEntries();
    diaryEntry.name = req.body.name;

    diaryEntry.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({message: "diaryEntry created"})
    })
  })

  .get(function (req, res) {
    DiaryEntries.find(function (err, entires) {
      if (err) {
        res.send(err);
      }
      res.json(entires);
    })
  });


Router.route('/diary/:entry_id')
  .get(function (req, res) {
    DiaryEntries.findById(req.params.entry_id, function (err, entry) {
      if (err) {
        res.send(err);
      }
      res.json(entry);
    })
  })

  .put(function(req, res) {
    DiaryEntries.findById(req.params.entry_id, function(err, entry) {

      if (err)
        res.send(err);

      console.log('Request.Body.Name', req.body.name);
      entry.name = req.body.name;  // update the name

      // save the entry
      entry.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Entry updated!' });
      });

    });
  })

  .delete(function (req, res) {
    DiaryEntries.remove({
      _id: req.params.entry_id
    }, function (err, entry) {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Successfully deleted'});
    })
  });


//register routes
// all of the routes will be prefixed with /api
app.use('/api', Router);

//start server
app.listen(port);

//