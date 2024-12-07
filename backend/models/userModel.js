let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/online-code-ide');

let userSchema = new mongoose.Schema({



});

module.exports = mongoose.model('User', userSchema); // 'User' is the name of the collection





