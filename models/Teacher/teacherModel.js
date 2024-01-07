const mongoose = require('mongoose')

//Main Schema for Teacher User
const teacherUserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please add your First Name']
    },
    middlename: {
        type: String,
        required: [true, 'Please add your Middle Name']
    },
    lastname: {
        type: String,
        required: [true, 'Please add your Last Name']
    },
    age: {
        type: String,
        required: [true, 'Please add your Age']
    },
    birthday: {
        type: String,
        required: [true, 'Please add your Birthday']
    },
    gender: {
        type: String,
        required: [true, 'Please add your Gender']
    },
    address: {
        type: String,
        required: [true, 'Please add your Complete Address']
    },
    user_status: {
        type: String,
        required: [true, 'Please add your Marital Status']
    },
    student_number: {
        type: String,
        required: [true, 'Please add your Student Number']
    },
    department: {
        type: String,
        required: [true, 'Please add your Department']
    },
    email: {
        type: String,
        required: [true, 'Please add your Email']
    },
    password: {
        type: String,
        required: [true, 'Please add your Password']
    },
    role: {
        type: String,
        default: 'student'
    },
    subjects: [teacherSubjectSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('TeacherUser', teacherUserSchema)

//Schema for Teacher Subjects
const teacherSubjectSchema = mongoose.Schema({
    subject_code: {
        type: String,
        required: [true, 'Please add your Subject Code']
    },
    subject_name: {
        type: String,
        required: [true, 'Please add your Subject Name']
    },
    subject_time: {
        type: String,
        required: [true, 'Please add your Subject Time']
    },
    subject_block:[subjectBlockSchema],
}, {
    timestamps: true
})

//Schema for Students Block and Attendance
const subjectBlockSchema = mongoose.Schema({
    block_number: {
        type: String,
        required: [true, 'Please add a Block Number']
    },
    students_enrolled: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StudentUser'
    }]
})