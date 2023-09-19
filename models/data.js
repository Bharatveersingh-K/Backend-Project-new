  
  const mongoose = require('mongoose');

 
  const travelSchema = new mongoose.Schema({
    id: Number,
    name: String,
    author: String,
    date: String,
    img: String,
    desc: String,
    readMore: String
  });
  
 
  const Data = mongoose.model('Data', travelSchema);
  
  module.exports = Data;
  