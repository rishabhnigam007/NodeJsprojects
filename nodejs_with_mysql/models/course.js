const mysql = require("mysql");

const Course = mysql.createPool({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  videos: {
    type: Number,
    require: true,
  },
  active: Boolean,
});

module.exports = mongoose.model("courses", Course);
