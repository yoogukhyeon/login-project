"use strict";

const db = require('../config/db')

class UserStorage {
    
    static #getUserinfo(data , id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKey = Object.keys(users);
        const userInfo = userKey.reduce((newUser , info) => {
            newUser[info] = users[info][idx];
            return newUser
        }, {});
        console.log(userInfo)
        return userInfo;
    };

    static #getUsers(data , isAll,  fields){
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{})
        
        return newUsers;
    }

    static getUsers(isAll , ...fields){
   
    }



    static getUserinfo(id){
        return new Promise((resolve , reject) => {
            db.query("select * from users where id = ?", [id] , (err, data) => {
                if(err) reject(err);
                resolve(data[0])
            })
        })
   
  
    
    };


    static async save(userInfo){

    }
}


module.exports = UserStorage;