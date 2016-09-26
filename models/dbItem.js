var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: String,
  property2: {type: String, unique: true},
  property3: Boolean,
  property4: {
    propA: Number,
    propB: String
  },
  created_at: Date
});

// dbitems is the name of the collection in the database
// WARNING will lowercase and pluralize collection name
var Item = mongoose.model('dbitems', itemSchema);

module.exports = Item;
