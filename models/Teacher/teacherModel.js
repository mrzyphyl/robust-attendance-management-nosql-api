const mongoose = require('mongoose')

//Main Schema for Teachers
const TeacherUserSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required: [true, 'Please add your First Name']
    },
    MiddleName: {
        type: String,
        required: [true, 'Please add your Middle Name']
    },
    LastName: {
        type: String,
        required: [true, 'Please add your Last Name']
    },
    Age: {
        type: Number,
        required: [true, 'Please add your Age']
    },
    Birthday: {
        type: Date,
        required: [true, 'Please add your Birthday']
    },
    Gender: {
        type: String,
        required: [true, 'Please add your Gender']
    },
    Asddress: {
        type: String,
        required: [true, 'Please add your Complete Address']
    },
    UserStatus: {
        type: String,
        required: [true, 'Please add your Marital Status']
    },
    StudentNumber: {
        type: String,
        required: [true, 'Please add your Student Number']
    },
    Department: {
        type: String,
        required: [true, 'Please add your Department']
    },
    Email: {
        type: String,
        required: [true, 'Please add your Email']
    },
    Password: {
        type: String,
        required: [true, 'Please add your Password']
    },
    role: {
        type: String,
        default: 'student'
    },
    Subjects: [teacherSubjectSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('TeacherUser', teacherUserSchema)

//Schema for Teacher Subjects
const TeacherSubjectSchema = mongoose.Schema({
    SubjectCode: {
        type: String,
        required: [true, 'Please add your Subject Code']
    },
    SubjectName: {
        type: String,
        required: [true, 'Please add your Subject Name']
    },
    SubjectTime: {
        type: String,
        required: [true, 'Please add your Subject Time']
    },
    SubjectBlock:[subjectBlockSchema],
}, {
    timestamps: true
})

//Schema for Students Block and Attendance
const SubjectBlockSchema = mongoose.Schema({
    BlockNumber: {
        type: String,
        required: [true, 'Please add a Block Number']
    },
    StudentsEnrolled: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StudentUser'
    }]
})

module.exports = {
    TeacherUserSchema,
    TeacherSubjectSchema,
    SubjectBlockSchema
};