"use strict";

const { resolveInclude } = require("ejs");
const User = require("../../models/User");
const logger = require("../../config/logger");
const UserStorage = require('../../models/UserStorage');


const output = {
    home: (req , res) => {
        logger.info(`GET / 200 '홈 화면으로 이동'`)
        res.render('home/index');
    },
    login: (req , res) => {
        logger.info(`GET / Login 200 '로그인 화면으로 이동'`)
        res.render('home/login');
    
    },
    register: (req, res) => {
        logger.info(`GET / Register 200 ' 회원가입 화면으로 이동'`)
        res.render('home/register');
    }
};

const process = {
     login: async (req, res) => {
      const user = new User(req.body);
      const response = await user.login();
      if(response.err){
          logger.error(`POST . Login 200 Response: "success: ${response.success}, ${response.err}"`)
      }else
      logger.info(`POST . Login 200 Response: "success: ${response.success}, meg: ${response.msg}"`);
      return res.json(response);
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
        if(response.err){
            logger.error(`POST . Register 200 Response: "success: ${response.success}, ${response.err}"`)
        }else
        logger.info(`POST . Register 200 Response: "success: ${response.success}, meg: ${response.msg}"`);
        return res.json(response);
    }


};


module.exports = {
    output,
    process
}