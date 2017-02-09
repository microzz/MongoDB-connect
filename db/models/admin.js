let mongoose=require('mongoose');
let AdminSchema=require('../schemas/admin');
let AdminModel=mongoose.model('admins',AdminSchema);

module.exports=AdminModel;