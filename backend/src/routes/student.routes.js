const express = require('express');
const router = express.Router();


const student = require('../controller/student.controller')

router.post('/add', student.addStudent )

router.post('/remove', student.removeStudent )
module.exports = router;