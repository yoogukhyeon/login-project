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
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                location.href="/login";
            }else{
                alert(res.msg);
            }


        }).catch((err) => {
            console.error("로그인중 에러 발생");

        })


    
};