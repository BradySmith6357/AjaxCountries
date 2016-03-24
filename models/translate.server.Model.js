// Data Model
var mongoose = require('mongoose')

var countrySchema = mongoose.Schema({
	name: String, 
    frenchName: String, 
    localName: String, 
    region: String,
})

var newCountry = mongoose.Schema({
	name: String, 
    frenchName: String, 
    localName: String, 
    region: String,
})

module.exports = mongoose.model('newcountries', countrySchema)
module.exports = mongoose.model('countries', countrySchema)