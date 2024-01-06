const mongoose = require('mongoose')

//Main Schema for Student User
const studentUserSchema = mongoose.Schema({
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
    suffix: {
        type: String,
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
    subjects: [studentSubjectSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('StudentUser', studentUserSchema)

//Schema for Student Subject
const studentSubjectSchema = mongoose.Schema({
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
    subject_instructor: {
        type: String,
        required: [true, 'Please add your Subject Instructor']
    },
    subject_block: {
        type: String,
        required: [true, 'Please add your Subject Block']
    },
    attendance: [studentAttendanceSchema],
}, {
    timestamps: true
})

//Schema for Students Attendance
const studentAttendanceSchema = mongoose.Schema({
    isPresent: {
        type: Boolean,
        default: undefined
    },
    attendanceTimeIn: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: true
})