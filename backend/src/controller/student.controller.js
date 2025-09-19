const db = require('../db/connection')

function addStudent(req,res){

    const collegeEmail = req.body.firstName + req.body.lastName + "@collegeName.pri" ;
    const studentData = [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.aadhaar,
        req.body.phone,
        req.body.course,
        req.body.age,
        req.body.gender,
        req.body.address,
        collegeEmail
    ]
    // console.log(studentData);
    

    const check = "select * from student_data where aadhaar = ? ";
    db.query(check, req.body.aadhaar,(err,result)=>{
        if(result.length > 0) return res.json(0)
            sql = "INSERT INTO student_data (firstName, lastName, email, aadhaar, phone, course, age, gender, address, college_email) VALUES (?)"
            db.query(sql, [studentData], (err, result) =>{
                if(err) return res.json(err);
                return res.json(1)
            } )
    })
        

}

function removeStudent(req,res){
    
    
    const check = "select college_email from student_data where aadhaar = ? ";
    db.query(check, req.body.aadhaar,(err,result)=>{
        console.log(result[0].college_email);
        if(req.body.collegeEmail != result) return res.json("Student not found")
            console.log("Not matched");
            
            sql = "DELETE FROM student_data WHERE aadhaar = ?";
            db.query(sql, req.body.aadhaar,(err,result)=>{
                if(err) return res.json(err)
                return res,json("Student deleted")
            } )
    })
        

}

module.exports = { addStudent, removeStudent }