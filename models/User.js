const mongoose = require('mongoose');

const GeoSchema = new mongoose.Schema({
    lat: String,
    lng: String,
});

const AddressSchema = new mongoose.Schema({
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: GeoSchema
});

const CompanySchema = new mongoose.Schema({
    name: String,
    catchPhrase: String,
    bs: String
});

const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    address: AddressSchema,
    phone: String,
    website: String,
    company: CompanySchema
});

module.exports = mongoose.model('User', UserSchema);
