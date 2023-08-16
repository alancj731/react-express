const mongoose = require("mongoose");

const infoSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, "1"],
    },
    course: {
      type: String,
      required: [true, "Please enter the course name"],
    },
    instructor: {
      type: String,
      default: "Unknown",
    },
    assignment: {
      type: String,
      required: [true, "Please enter the assignment name"],
    },
    deadline: {
      type: String,
      default: new Date().toDateString(),
      //required: [true, "Please enter the due date"]
    },
    description: {
      type: String,
      default: "None",
    },
    note: {
      type: String,
      default: "None",
    },
  },
  {
    timestamps: true,
  }
);

const Info = mongoose.model("Assignment", infoSchema);

module.exports = Info;
