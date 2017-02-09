
let mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// let db = mongoose.connect('mongodb://localhost/users');
let teacher = {
    number: {type: String},
    name: {type: String},
    password: {type: String},
    gender: {type: String},
    college: {type: String},
    call: {type: String},
    subject: {type: String},
    meta: {
        createAt: {type: Date, default: Date.now},
        updateAt: {type: Date, default: Date.now}
    }
};
// let studentData = {
//     number: 1323213,
//     name: 'Z2',
//     username: 'H',
//     password: 'efwefwes',
//     gender: 1,
//     college: '软件学院',
//     major: '软件工程',
//     email: '90@qq.com',
//     address: 'JX'
// };
let TeacherSchema = new mongoose.Schema(teacher);

// let StudentModel = db.model('student', StudentSchema);


TeacherSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next()
});

TeacherSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)
    },
    findById: function (id, cb) {
        return this
            .findOne({_id: id})
            .exec(cb)
    },
    findByUsername: function (username, cb) {
        return this
            .findOne({username: username})
            .exec(cb)
    }
};

module.exports = TeacherSchema;


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

