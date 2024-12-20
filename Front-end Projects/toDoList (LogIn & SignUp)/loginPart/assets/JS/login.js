window.localStorage.setItem("currentLogin",[])
// Log in: Eye 
const eye = document.querySelector("#eye");
const pass = document.querySelector("#password");
eye.addEventListener("mousedown",()=>{
    pass.attributes[0].value = 'text';
    eye.attributes[0].value = "./assets/images/eye-open.svg";
})
eye.addEventListener("mouseup",()=>{
    pass.attributes[0].value = 'password';
    eye.attributes[0].value = "./assets/images/closed-eyes.svg";
})

// Change Animation
const all = document.querySelector(".all");
const linkLogin = document.querySelector("#link-sign");
linkLogin.addEventListener("click",()=>{
    all.style.animation = "slideToTop 1.4s forwards";
    setTimeout(()=>{
        window.location.href = "./sign-up.html";
    },700)
})
// Main
const accounts = JSON.parse(localStorage.getItem("datas"));
console.log(accounts);

let alertEmail = document.querySelector("#alertEmail");
let alertPassw = document.querySelector("#alertPassw");
const form = document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const emailInput = document.querySelector("#email").value || "";
    const passwordInput = document.querySelector("#password").value || "";  
    let emailStat = false;
    let passwStat = false;
    for(let account of accounts){
        if(account.email == emailInput){
            if(account.password == passwordInput){
                passwStat = true;
                window.localStorage.setItem("currentLogin",JSON.stringify(account));
            }
            emailStat = true;
        }
    }
    if(!emailStat){
        alertEmail.innerHTML = "Email has not found!";
    }else if(emailStat && !passwStat){
        alertEmail.innerHTML = ""
        alertPassw.innerHTML = "Password is incorrect";
    }else if(emailStat && passwStat){
        alertPassw.innerHTML = "";
        window.location.href = "../toDoList/index.html";     
    }
})