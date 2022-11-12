import mongoose from 'mongoose';
const { Schema } = mongoose;
const User = require('/models/Event')

const eventSchema = new Schema({
  eventName:  String, // String is shorthand for {type: String}
  tags: [String],
  body:   String,
  description: String,
  location: {
      type: "Point",
      coordinates: [-73.856077, 40.848447]
  },
  volunteers_interested: [User]
});

module.exports = mongoose.model("Event", eventSchema);