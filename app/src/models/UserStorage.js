"use strict";

class UserStorage {
    static #users = {
        id: ["gukhyeon" , "개발" , "김팀장"],
        password: ["1234", "1235" , "1236"],
        name: ["국현","나개발", "김팀장"]
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{})
        
        return newUsers;

    }
    static getUserinfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKey = Object.keys(users);
        const userInfo = userKey.reduce((newUser , info) => {
            newUser[info] = users[info][idx];
            return newUser
        }, {});
        return userInfo;
    }
}


module.exports = UserStorage;