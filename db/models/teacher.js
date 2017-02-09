let mongoose=require('mongoose');
let TeacherSchema=require('../schemas/teacher');
let TeacherModel=mongoose.model('teachers',TeacherSchema);

module.exports=TeacherModel;