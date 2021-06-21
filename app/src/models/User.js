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
        const {id , password} = await UserStorage.getUserinfo(client.id);
        console.log({id , password})
        if(id){
            if(id === client.id && password === client.pw){
                return {success: true , msg: "로그인 성공입니다."}
            }else{
                return {success: false , msg: "비밀번호가 틀립니다."}
            }
        }
        return {success: false , msg: "아이디가 없습니다."}
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