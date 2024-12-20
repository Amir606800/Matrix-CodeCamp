let eyeBtn = document.getElementById("butn");
let eye = document.querySelector("#eye");
let passwordState = document.getElementById("password");

eyeBtn.addEventListener("mousedown",()=>{
    eye.attributes[0].value = ("/Assets/Icons/eye-open.svg");
    passwordState.attributes[0].value = ("text");
 });
eyeBtn.addEventListener("mouseup",()=>{
    eye.attributes[0].value = ("/Assets/Icons/closed-eyes.svg");
    passwordState.attributes[0].value = ("password");
    eye.style.transition = "all .5s"
 });



// eyeBtn.addEventListener("click",()=>{
//     if (eye.attributes[0].value === "/Assets/Icons/closed-eyes.svg"){
//         eye.attributes[0].value = ("/Assets/Icons/eye-open.svg");
//     passwordState.attributes[0].value = ("text");
//     }else if(eye.attributes[0].value === "/Assets/Icons/eye-open.svg"){
//         eye.attributes[0].value = ("/Assets/Icons/closed-eyes.svg");
//     passwordState.attributes[0].value = ("password");
//     }
// })

let datas = JSON.parse(localStorage.getItem("datas")) || [];

console.log(datas);

let alertEmail = document.querySelector(".alert-email");
let alertPass = document.querySelector(".alert-password");

let form = document.getElementById("fom");
let login = document.getElementById("login");
form.addEventListener("submit",(event)=>{

    event.preventDefault()

    let emailInput =document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;
    
    let emailStatus = false;
    let passwordStatus = false;
    for (let item of datas){
        if(item.email === emailInput){
            emailStatus = true;
            if(item.password === passwordInput){
                passwordStatus = true;
                break
            }
        }
    }
    if(!emailStatus){
        alertEmail.innerHTML = "The email has not found"
    }else{
        alertEmail.innerHTML = ""
    }
    if( emailStatus && !passwordStatus){
        alertPass.innerHTML = "The password is incorrect"
    }else{
        alertPass.innerHTML = ""
    }

    if(emailStatus && passwordStatus){
        window.location.href = ("../main_webpage.html")
    }
})




