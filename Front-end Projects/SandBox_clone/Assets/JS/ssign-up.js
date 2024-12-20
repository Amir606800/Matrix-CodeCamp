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

let eyeBtn2 = document.getElementById("butn2");
let eye2 = document.querySelector("#eye2");
let passwordState2 = document.getElementById("password2");

eyeBtn2.addEventListener("mousedown",()=>{
    eye2.attributes[0].value = ("/Assets/Icons/eye-open.svg");
    passwordState2.attributes[0].value = ("text");
 });
eyeBtn2.addEventListener("mouseup",()=>{
    eye2.attributes[0].value = ("/Assets/Icons/closed-eyes.svg");
    passwordState2.attributes[0].value = ("password");
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


// Setting up the signUp system
let datas = JSON.parse(localStorage.getItem("datas")) || [];

console.log(datas)

let alertEmail = document.querySelector(".alert-email");
let alertPass = document.querySelector(".alert-password");

let form = document.getElementById("fom");
let login = document.getElementById("login");
form.addEventListener("submit",(event)=>{

    event.preventDefault()

    let emailInput =document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;
    let passwordInput2 = document.getElementById("password2").value;
    if( !(passwordInput == passwordInput2)){
        alertPass.innerHTML = "Passwords doesn't match ";
    }else{
        
        let userFound = false
        for (let item of datas){
            if(emailInput === item.email){
                alertEmail.innerHTML = `The Email has already exists. Please, your account.`
                userFound =true;
            }
        }
        alertPass.innerHTML = "";
        
        if(!userFound){
            alertEmail.innerHTML = "";
            let newUser ={
                email:emailInput,
                password:passwordInput,
            };
            datas.push(newUser);
            localStorage.setItem("datas",JSON.stringify(datas));
            window.location.href = ("../pages/login_page.html");          
        } }



        // if( !(passwordInput == passwordInput2)){
        //     alert("Passwords doesn't match ")
        // }else if(passwordInput.length <=8 ){
        //     alert("password must be longer than 8")
        // }else{
        //     let emailExists = false;
    
        //     for (let item of datas) {
        //         console.log(item.email);
        //         console.log(emailInput);
    
        //         if (emailInput === item.email) {
        //             emailExists = true;
        //             break; // Stop checking further as the email already exists
        //         }
        //     }
    
        //     if (!emailExists) {
        //     let newUser = {
        //         email: emailInput,
        //         password: passwordInput,
        //     };
        //     datas.push(newUser);
        //     localStorage.setItem("datas", JSON.stringify(datas));
        //     // window.location.href = ("../pages/login_page.html");
        //     alert("Account successfully created. Please log in to verify.");
        //     } else {
        //     alert("Email already exists. Please log in.");
        //     }
        // }
    }
)


