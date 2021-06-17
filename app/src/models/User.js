"use strict";

const UserStorage = require('./UserStorage');

class User {
    constructor(body){
        this.body = body;
    };
    
    login() {
        const body = this.body;
        const {id , password} = UserStorage.getUserInfo(body.id);
        if(id){
            if(id === body.id && password === body.pw){
                return {success : true, msg: "가입에 성공했습니다"}

            }else{
                return {success : false, meg: "비밀번호가 틀렸습니다"}
            }
        }
        return {success : false, meg: "존재하지 않는 아이디입니다."}
    }
}

module.exports = User;