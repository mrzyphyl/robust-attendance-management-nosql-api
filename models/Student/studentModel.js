const mongoose = require('mongoose')

//Main Schema for Students
const StudentUserSchema = mongoose.Schema({
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
    Suffix: {
        type: String,
    },
    Age: {
        type: Number,
        required: [true, 'Please add your Age']
    },
    BirthDay: {
        type: Date,
        required: [true, 'Please add your Birthday']
    },
    Gender: {
        type: String,
        required: [true, 'Please add your Gender']
    },
    Address: {
        type: String,
        required: [true, 'Please add your Complete Address']
    },
    MaritalStatus: {
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
    Role: {
        type: String,
        default: 'student'
    },
    Subjects: [studentSubjectSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('StudentUser', studentUserSchema)

//Schema for Student Subject
const StudentSubjectSchema = mongoose.Schema({
    SubjectCode: {
        type: String,
        required: [true, 'Please add your Subject Code']
    },
    SubjectName: {
        type: String,
        required: [true, 'Please add your Subject Name']
    },
    SubjectTime: {
        type: Date,
        required: [true, 'Please add your Subject Time']
    },
    SubjectInstructor: {
        type: String,
        required: [true, 'Please add your Subject Instructor']
    },
    SubjectBlock: {
        type: String,
        required: [true, 'Please add your Subject Block']
    },
    Attendance: [studentAttendanceSchema],
}, {
    timestamps: true
})

//Schema for Students Attendance
const StudentAttendanceSchema = mongoose.Schema({
    IsPresent: {
        type: Boolean,
        default: undefined
    },
    AttendanceTimeIn: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: true
})

module.exports = {
    StudentUserSchema,
    StudentSubjectSchema,
    StudentAttendanceSchema
};