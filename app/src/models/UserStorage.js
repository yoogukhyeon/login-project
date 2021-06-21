"use strict";

const fs = require("fs").promises;

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

    static getUsers(...fields){
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{})
        
        return newUsers;

    }
    static getUserinfo(id){
        // const users = this.#users;
        return fs.readFile('./src/databases/users.json')
            .then((data) => {
                return this.#getUserinfo(data, id);
            })
            .catch((err) => console.log(err));
        
        
  
    
    };


    static save(userInfo){
        // const users = this.#users;
        users.id.push(userInfo.id)
        users.name.push(userInfo.name)
        users.password.push(userInfo.pw)
        console.log(users)
    }
}


module.exports = UserStorage;