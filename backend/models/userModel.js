let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://amansoni0713:Xd7ICihHMRgUlHqh@cluster1.pa80r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1');

let userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  date:{
    type: Date,
    default: Date.now
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', userSchema); // 'User' is the name of the collection





// let mongoose = require('mongoose');

// let userSchema = new mongoose.Schema({
//   name: String,
//   username: String,
//   email: String,
//   password: String,
//   date:{
//     type: Date,
//     default: Date.now
//   },
//   isBlocked: {
//     type: Boolean,
//     default: false
//   },
//   isAdmin: {
//     type: Boolean,
//     default: false
//   }
// });

// module.exports = mongoose.model('User', userSchema); // 'User' is the name of the collection
