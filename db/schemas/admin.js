
let mongoose = require('mongoose');

let admin = {
    name: {type: String},
    password: {type: String}
};

let AdminSchema = new mongoose.Schema(admin);

module.exports = AdminSchema;
