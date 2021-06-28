"use strict";

console.log("hello")


const id = document.querySelector("#id");
const pw = document.querySelector("#password");
const loginBtn = document.querySelector("#button");


loginBtn.addEventListener("click", login);


function login(){


    if(!id.value){
        alert('아이디를 입력해주세요')
        return false
    }

    if(!pw.value){
        alert('비밀번호를 입력해주세요')
        return false
    }


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
                location.href="/";
            }else{
                alert(res.json.stringify(msg));
            }


        }).catch((err) => {
            console.error("로그인중 에러 발생");

        })


    
};