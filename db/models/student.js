let mongoose=require('mongoose');
let StudentSchema=require('../schemas/student');
let StudentModel=mongoose.model('students',StudentSchema);

module.exports=StudentModel;
