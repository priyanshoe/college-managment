const mysql = require('mysql2');
require('dotenv').config();

try {
    db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_Name
    });

    db.connect((err) => {
        if (err) {
            console.error('❌ Database connection failed:', err.message);
            return;
        }
        console.log('✅ Connected to database!');
    });
}catch(error){
    console.error('❌ Error while creating database connection:', error.message);
}

module.exports = db;