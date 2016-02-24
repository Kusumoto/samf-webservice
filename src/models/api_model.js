var Mongoose = require('../database').Mongoose;

var apiSchema = new Mongoose.Schema({
    api_key : String,
    api_name : String,
    api_isenable : Boolean
}, { collection : 'api' });

exports.API = Mongoose.model('api',apiSchema);