const express = require('express');
const moment = require('moment');
const { StudentAttendanceSchema } = require('./../../Models/Student/StudentModel');

//Get One Attendance for Student User
//@route GET /api/records/attendance/:id
//@access Public
const GetOneAttendance = asyncHandler (async (req, res) => {
    //Find the Student User record by ID
    const record = await StudentAttendanceSchema.findOne({
        'attendance._id': req.params.id
    })

    if (!record) {
        res.status(404)
        throw new Error('Record not found')
    }

    //Find the specific Attendance record within the array
    const attendanceItem = record.attendance.find(
        (item) => item._id.toString() === req.params.id
    )

    if (!attendanceItem) {
        res.status(404)
        throw new Error('Item not found')
    }

    res.status(200).json(attendanceItem)
})

//Add Attendance for Student User
//@route PUT /api/student-user/:id/attendance
//@access Public
const AddAttendance = asyncHandler (async (req, res) => {
    const { SubjectCode, SubjectName, SubjectTime, SubjectInstructor, Department } = req.body;

    try {
        // Find the patient record by ID
        const record = await StudentAttendanceSchema.findById(req.params.id)

        if (!record) {
            res.status(404)
            throw new Error('Record not found')
        }

        const today = moment().startOf('day');

        // Check if there is an attendance record for today
        const existingAttendanceToday = record.Attendance.some((attendance) => {
            const attendanceDateOnly = moment(attendance.attendanceTimeIn).startOf('day');
            return (
                attendance.SubjectCode === SubjectCode &&
                attendanceDateOnly.isSame(today)
            );
        });
    
        if (existingAttendanceToday) {
            res.status(400);
            throw new Error('Attendance already checked today');
        }

        // Create a new attendance item
        const newAttendance = {
            SubjectCode,
            SubjectName,
            SubjectTime,
            SubjectInstructor,
            Department
        }

        // Add the new attendance item to the record
        record.attendance.push(newAttendance)

        // Save the updated record
        await record.save()

        res.status(201).json(newAttendance)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


module.exports = {
    GetOneAttendance,
    AddAttendance
}