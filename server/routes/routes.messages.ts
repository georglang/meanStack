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
      res.status(200);
    });
  })
  .post(function (req, res) {
    Message.create(req.body, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'created'});
      res.status(201);
    });
  });

MessageRouter.route('/:message_id')
  .get((req, res) => {
    Message.findById(req.params.message_id, (err, result) => {
      if (err) {
        res.send(err);
      }
      res.json(result);
      res.status(200);
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
        res.status(200);
      });
    });
  })
  .delete(function (req, res) {
    Message.remove({ _id: req.params.message_id }, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'deleted'});
      res.status(204);
    });
  });

export default MessageRouter;
