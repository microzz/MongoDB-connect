
let mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// let db = mongoose.connect('mongodb://localhost/users');
let student = {
    number: {type: String},
    name: {type: String},
    password: {type: String},
    gender: {type: String},
    college: {type: String},
    major: {type: String},
    email: {type: String},
    address: {type: String},
    meta: {
        createAt: {type: Date, default: Date.now},
        updateAt: {type: Date, default: Date.now}
    },
    scores: {}
};

let StudentSchema = new mongoose.Schema(student);

// let StudentModel = db.model('student', StudentSchema);


StudentSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next()
});

StudentSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            //.sort('meta.updateAt')
            .sort('number')
            .exec(cb)
    },
    findById: function (id, cb) {
        return this
            .findOne({_id: id})
            .exec(cb)
    },

};

module.exports = StudentSchema;


// StudentModel.create(studentData, function (err, doc) {
//     if (err) {
//         console.log(err);
//     }else {
//         console.log(doc);
//     }
// });

// StudentModel.findByUsername('H', (err, doc) => {
//    console.log(doc)
// });

/*
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("------数据库连接成功！------");
});
*/

