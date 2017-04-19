import * as mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Message = mongoose.model('Message', messageSchema);
export default Message;
