var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  alias: String,
  first_name: String,
  last_name: String,
  city: String,
  power_name: {type: String, enum: ['Invisibility', 'Flight', 'Super Speed', 'Heat Vision', 'Super Strength', 'Accelerated Healing', 'Power Blast', 'Animal Affinity']},
  created_at: {type: Date, default: Date.now}
});

// dbitems is the name of the collection in the database
// WARNING will lowercase and pluralize collection name
var Hero = mongoose.model('heroes', heroSchema);

module.exports = Hero;
