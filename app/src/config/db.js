const mysql = require('mysql');

//함수 안에 오브젝트로 연결해서 사용
const db = mysql.createConnection({
    host: "login.cscr9rlnklrd.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "dkswoah589318!!",
    database: "login",
})

db.connect();

//외부에서 사용할수있도록 export 
module.exports = db;