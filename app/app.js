const express = require('express');
const app = express();
const bodyParser = require("body-parser");


const dotenv = require("dotenv");

dotenv.config();

// 라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine","ejs");


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
//url을 통해서 전달 되는 url 데이터들을 꺠지지않고 전달해주기 위해서 있다

app.use(express.static(`${__dirname}/src/public`));
// app.use(express.static(__dirname + 'src/public'))
app.use("/" , home); //use = 미들 웨어를 등록해주는 메서드 "/"경로로 들어오면 home 폴더로 보내준다;

module.exports = app;



