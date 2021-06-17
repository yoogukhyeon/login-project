"use strict";

const UserStorage = require('./UserStorage');


class User {
    //constructor body 값을 받는다
    constructor(body){
        this.body = body;

    }

    login(){
        const body = this.body;
        const {id, password} = UserStorage.getUserinfo(body.id);
   
        if(id){
            if(id === body.id && password === body.pw){
                return {success: true , msg: "로그인 성공입니다."}
            }else{
                return {success: false , msg: "비밀번호가 틀립니다."}
            }
        }
        return {success: false , msg: "아이디가 없습니다."}
    }
}




module.exports = User;