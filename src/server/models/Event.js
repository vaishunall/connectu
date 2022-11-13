const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  eventName:  String, 
  tags: [String],
  organizer_name: String,
  description: String,
  location: {
    coordX: String, 
    coordY: String
  },
  volunteers_interested: [Number]
});

module.exports = mongoose.model("Event", eventSchema);