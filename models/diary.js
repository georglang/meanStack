const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const DiaryEntrySchema = new Schema({
  name: String,
  place: String,
  participants: String
});

module.exports = mongoose.model('DiaryEntries', DiaryEntrySchema);