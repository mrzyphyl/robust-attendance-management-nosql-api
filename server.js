const express = require('express')
const colors = require('colors')
const { errorHandler } = require('./middlewares/errorHandler')
const connectDB = require('./database/database')
const cors = require('cors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/student-user', require('./routes/Student/studentUserRoutes'))
app.use('/api/professor-user', require('./routes/Teacher/teacherUserRoutes'))
app.use('/api/student/subjects', require('./routes/Student/studentSubjectRoutes'))
app.use('/api/professor/subjects', require('./routes/Teacher/teacherSubjectsRoutes'))
app.use('/api/student/attendance', require('./routes/Student/studentAttendanceRoutes'))
app.use('/api/professor/attendance', require('./routes/Teacher/teacherAttendanceRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))