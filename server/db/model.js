var mongoose = require('mongoose');

module.exports = mongoose.model('SampleData', {
  username: String,
  password: String,
  organization: String
});
