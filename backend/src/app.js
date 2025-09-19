const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
});


const student = require('./routes/student.routes')
app.use('/api/student', student)

module.exports = app;