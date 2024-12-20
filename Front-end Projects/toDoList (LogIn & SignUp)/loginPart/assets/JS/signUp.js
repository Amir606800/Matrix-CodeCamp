// The first Eye
const eye1 = document.querySelector(".eye1");
const pass1 = document.querySelector(".password1");
eye1.addEventListener("mousedown",()=>{
    pass1.attributes[0].value = 'text';
    eye1.attributes[0].value = "./assets/images/eye-open.svg";
})
eye1.addEventListener("mouseup",()=>{
    pass1.attributes[0].value = 'password';
    eye1.attributes[0].value = "./assets/images/closed-eyes.svg";
})
// The second Eye
const eye2 = document.querySelector(".eye2");
const pass2 = document.querySelector(".password2");
eye2.addEventListener("mousedown",()=>{
    pass2.attributes[0].value = 'text';
    eye2.attributes[0].value = "./assets/images/eye-open.svg";
})
eye2.addEventListener("mouseup",()=>{
    pass2.attributes[0].value = 'password';
    eye2.attributes[0].value = "./assets/images/closed-eyes.svg";
})
// Change Animation
const all2 = document.querySelector(".all2");
const linkSign = document.querySelector("#link-sign");
linkSign.addEventListener("click",()=>{
    all2.style.animation = "slideToBot 1.4s forwards";
    setTimeout(()=>{
        window.location.href = "./login.html";
    },700)
})
// Main

const accounts = JSON.parse(localStorage.getItem("datas"));
console.log(accounts);

const form = document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const emailInput = document.querySelector("#email");
    const passwordInput1 = document.querySelector(".password1");
    const passwordInput2 = document.querySelector(".password2");
    const userNameInput = document.querySelector("#username");
    
    let emailStat = false;
    let passStat = true;

    for(let account of accounts){
        if(account.email == emailInput.value){
            emailStat = true;  
        }
        
    }

    if(passwordInput1.value == passwordInput2.value){
        passStat = false;
    }
    
    if(emailStat){
        document.querySelector("#alertEmail").innerHTML = "Email has already created";
    }else if(passStat){
        document.querySelector("#alertEmail").innerHTML = "";
        document.querySelector("#alertPassw2").innerHTML = "Password doesn't match"
    }else{
        let newUser ={
            username:userNameInput.value,
            email:emailInput.value,
            password:passwordInput1.value,
            content:[],
        };
        accounts.push(newUser);
        localStorage.setItem("datas",JSON.stringify(accounts));
        all2.style.animation = "slideToBot 1.4s forwards";
        setTimeout(()=>{
            window.location.href = "./login.html"
        },700)
        }
})
