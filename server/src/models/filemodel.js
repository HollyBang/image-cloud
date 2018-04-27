const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Items
const schema = new Schema({
    img: { data: Buffer, contentType: String }
  });

module.exports = mongoose.model('images', schema);