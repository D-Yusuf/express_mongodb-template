const { model, Schema } = require('mongoose');

const x = new Schema({
  name: {type: String, default: "Anonymous"}
});

module.exports = model('X', x);
