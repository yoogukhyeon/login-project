"use strict";

const { resolveInclude } = require("ejs");
const User = require("../../models/User");
const logger = require("../../config/logger");
const UserStorage = require('../../models/UserStorage');


const output = {
    home: (req , res) => {
        logger.info(`GET / 304 '홈 화면으로 이동'`)
        res.render('home/index');
    },
    login: (req , res) => {
        logger.info(`GET / Login 304 '로그인 화면으로 이동'`)
        res.render('home/login');
    
    },
    register: (req, res) => {
        logger.info(`GET / Register 304 ' 회원가입 화면으로 이동'`)
        res.render('home/register');
    }
};

const process = {
     login: async (req, res) => {
      const user = new User(req.body);
      const response = await user.login();
      const url = {
        method: "POST",
        path: "/login",
        status: response.err ? 400 : 200,
      };
      log(response , url);
      return res.status(url.status).json(response);
        // const id = req.body.id;
        // const pw = req.body.pw;
     
        // const users = UserStorage.getUsers('id', 'password')
        // const response = {};
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.password[idx] === pw){
        //         response.success = true;
        //         return res.json(response)
        //     }

        // }
        // response.success = false;
        // response.msg = "로그인을 실패했습니다";
        // return res.json(response);
    },


    register: async (req ,res) => {
        const user = new User(req.body);
        const response = await user.register();
        const url = {
            method: "POST",
            path: "/register",
            status: response.err ? 409 : 201,
          };
          log(response , url);
        return res.status(url.status).json(response);
    }


};


module.exports = {
    output,
    process
}

const log = (response , url) => {
    if(response.err){
        logger.error(`${url.method} ${url.path} ${url.status} Response: ${response.success}, ${response.err}`)
    }else{
    logger.info(`${url.method} ${url.path} ${url.status} Response: ${response.success}, ${response.msg || ""}`)
    }
}