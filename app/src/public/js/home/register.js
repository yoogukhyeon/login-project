"use strict";



const id = document.querySelector("#id");
const name = document.querySelector('#name')
const pw = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const registerBtn = document.querySelector("#button");



registerBtn.addEventListener("click", register);


function register(){


    if(!id.value){
        return alert('아이디를 입력해주세요.')
    };
    if(name.value == ""){
        return alert('이름을 입력해주세요.')
    }

    if(pw.value == ""){
        return alert('비밀번호를 입력해주세요.')
    }
    if(pw.value !== confirmPassword.value){
        return alert("비밀번호가 일치하지않습니다.")
    };



    const req = {
        id: id.value,
        name: name.value,
        pw: pw.value,
    };
      

    fetch('/register', {
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
                if (res.err) return alert(res.err);
                alert(res.msg);
            }


        }).catch((err) => {
            console.error("회원가입중 에러 발생");

        })


    
};