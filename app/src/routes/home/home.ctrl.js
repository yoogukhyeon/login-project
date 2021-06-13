"use strict";

const { resolveInclude } = require("ejs");




const output = {
    home: (req , res) => {
        res.render('home/index');
    },
    login: (req , res) => {
        res.render('home/login');
    
    },
};

const users = {
    id: ["gukhyeon" , "개발" , "김팀장"],
    password: ["1234", "1235" , "1236"],
};
 
const process = {
    login: (req, res) => {
      const id = req.body.id;
      const pw = req.body.password

      if(users.id.includes(id)){
          const idx = users.id.indexOf(id);
          if(users.pw[idx] === pw){
              return res.json({
                  success: true,
              })
          }
      }

      return res.json({
          success: false,
          msg: "로그인에 실패햐셨습니다",
      })

    }
}


module.exports = {
    output,
    process
}