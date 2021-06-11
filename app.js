const express = require('express');
const app = express();

// 라우팅
const home = require("./routes/home");

//앱 세팅
app.set("views", "./views");
app.set("view engine","ejs");




app.use("/" , home); //use = 미들 웨어를 등록해주는 메서드 "/"경로로 들어오면 home 폴더로 보내준다;

module.exports = app;



