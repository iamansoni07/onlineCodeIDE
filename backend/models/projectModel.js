const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/online-code-ide');  

const projectSchema = new mongoose.Schema({
  title: String,
  createdBy: String,
  date: {
    type: Date,
    default: Date.now
  },

});

module.exports = mongoose.model("Project", projectSchema);





