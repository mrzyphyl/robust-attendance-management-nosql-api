const express = require('express')
const colors = require('colors')
const { ErrorHandler } = require('./Middlewares/ErrorHandler')
const ConnectDB = require('./Database/Database')
const cors = require('cors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

ConnectDB()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use('/api/student-user', require('./routes/Student/studentUserRoutes'))
// app.use('/api/professor-user', require('./routes/Teacher/teacherUserRoutes'))
// app.use('/api/student/subjects', require('./routes/Student/studentSubjectRoutes'))
// app.use('/api/professor/subjects', require('./routes/Teacher/teacherSubjectsRoutes'))
// app.use('/api/student/attendance', require('./routes/Student/studentAttendanceRoutes'))
// app.use('/api/professor/attendance', require('./routes/Teacher/teacherAttendanceRoutes'))

app.use(ErrorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))