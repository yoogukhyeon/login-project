"use strict";

console.log("hello")


const id = document.querySelector("#id");
const pw = document.querySelector("#password");
const loginBtn = document.querySelector("#login");


loginBtn.addEventListener("click", login);


function login(){
    const req = {
        id: id.value,
        pw: pw.value,
    };
  

    fetch('/login', {
        method: "post",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(req)
    });
    
};