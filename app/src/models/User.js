"use strict";

const { response } = require('express');
const UserStorage = require('./UserStorage');


class User {
    //constructor body 값을 받는다
    constructor(body){
        this.body = body;

    }

    async login(){
        const client = this.body;
        try{
        const user = await UserStorage.getUserinfo(client.id);
     
        if(user){
            if(user.id === client.id && user.password === client.pw){
                return {success: true , msg: "로그인 성공입니다."}
            }else{
                return {success: false , msg: "비밀번호가 틀립니다."}
            }
        }
        return {success: false , msg: "존재 하는 아이디가 없습니다."}
    }catch (err){
            return {success : false , err}
        }
    };

    async register() {
        const client = this.body;
        try{
        const response = await UserStorage.save(client);
        return response;
    } catch (err) {
        return {success : false, msg: err}
    }
    }
}




module.exports = User;