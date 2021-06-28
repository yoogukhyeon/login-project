const mysql = require('mysql');

//함수 안에 오브젝트로 연결해서 사용
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

db.connect();

//외부에서 사용할수있도록 export 
module.exports = db;