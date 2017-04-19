import * as express from 'express';
import Message from '../models/message.model';
const MessageRouter = express.Router();

MessageRouter.route('/')
  .get(function (req, res) {
    Message.find({}, (err, entires) => {
      if (err) {
        res.send(err);
      }
      res.json(entires);
    });
  })
  .post(function (req, res) {
    const message = new Message();
    message.title = req.body.title;
    message.content = req.body.content;
    message.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({message: 'diaryEntry created'});
    });
  });

MessageRouter.route('/:entry_id')
  .get(function (req, res) {
    Message.findById(req.params.entry_id, function (err, entry) {
      if (err) {
        res.send(err);
      }
      res.json(entry);
    });
  })
  .put(function(req, res) {
    Message.findById(req.params.entry_id, function(err, entry) {
      if (err) {
        res.send(err);
      }
      console.log('Request.Body.Title', req.body.title);
      entry.title = req.body.title;  // update the name
      entry.content = req.body.content;

      // save the entry
      entry.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Message updated!' });
      });
    });
  })
  .delete(function (req, res) {
    Message.remove({
      _id: req.params.entry_id
    }, function (err, entry) {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Successfully deleted'});
    });
  });

export default MessageRouter;
