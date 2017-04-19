import * as express from 'express';
import Message from '../models/message.model';
const MessageRouter = express.Router();

MessageRouter.route('/')
  .get((req, res) => {
    Message.find({}, (err, doc) => {
      if (err) {
        res.send(err);
      }
      res.json(doc);
    });
  })
  .post(function (req, res) {
    Message.create(req.body, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'created'});
    });
  });

MessageRouter.route('/:message_id')
  .get((req, res) => {
    Message.findById(req.params.message_id, (err, result) => {
      if (err) {
        res.send(err);
      }
      res.json(result);
    });
  })
  .put((req, res) => {
    Message.findById(req.params.message_id, (err, result) => {
      if (err) {
        res.send(err);
      }
      result.update(req.body, (saveError) => {
        if (saveError) {
          res.send(saveError);
        }
        res.json({ message: 'updated!' });
      });
    });
  })
  .delete(function (req, res) {
    Message.remove({ _id: req.params.message_id }, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'deleted'});
    });
  });

export default MessageRouter;
