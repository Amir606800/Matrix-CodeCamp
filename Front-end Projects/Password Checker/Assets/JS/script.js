window.addEventListener("load", () => {
    const loadScreen = document.querySelector(".loadLogo");
    const mainContent = document.querySelector(".main");
    setTimeout(() => {
        if (loadScreen) {
        
        loadScreen.classList.add("hidden");

        mainContent.style.display = "flex"
        ; // Matches the transition duration
    }
    
    }, 1000)
});
const starting = document.querySelector(".Starter")
setTimeout(()=>{
    starting.classList.add("show")
    setTimeout(()=>{
        starting.classList.add("hidden")
    },1500)
},850)


const headText = document.querySelector(".textHead");
const time = document.querySelector(".time");
const form = document.querySelector("form");
let s=1;
document.querySelector("input").addEventListener("input",(e)=>{
    e.preventDefault();
    const passInput = document.querySelector("input").value;
    headText.style.display = "block";
    if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#^*,.;:])[A-Za-z\d@$!%*?&#^*,.;:]{4,}$/.test(passInput)){
        headText.innerHTML = "Strong";
        document.querySelector(".main").style.backgroundColor = "green";
        time.style.backgroundColor = "green";
        headText.style.backgroundColor = "green";
        s=95;
    }else if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/.test(passInput) || /^(?=.*[A-Za-z])(?=.*[@$!%*?&#^*,.;:])[A-Za-z@$!%*?&#^*,.;:]{4,}$/.test(passInput)){
        headText.innerHTML = "Moderate";
        document.querySelector(".main").style.backgroundColor = "rgb(13, 188, 112)";
        time.style.backgroundColor = "rgb(13, 188, 112)";
        headText.style.backgroundColor = "rgb(13, 188, 112)";
        if(/[!@#$%^&*<>:"';.,]/.test(passInput)){
            s=85
        }else{
            s=62
        }
    }else if(/^(?=.*[A-Za-z])[A-Za-z]{4,}$/.test(passInput)){
        headText.innerHTML = "Weak";
        document.querySelector(".main").style.backgroundColor = "orange";
        time.style.backgroundColor = "orange";
        headText.style.backgroundColor = "orange";
        s=26
    }else{
        headText.innerHTML = "Very Weak";
        document.querySelector(".main").style.backgroundColor = "rgb(216, 56, 20)";
        time.style.backgroundColor = "red";
        headText.style.backgroundColor = "red";
        s=1
    } 
    
    let timeNeeded = (s**(passInput.length)/10**(passInput.length))

    time.querySelector("p").innerHTML = `${timeNeeded} seconds`
})



const eye=document.querySelector("#eye")
eye.addEventListener("mousedown",()=>{
    document.querySelector("input").attributes[0].value = ("text");
    eye.attributes[0].value = ("Assets/images/eye-open.svg")
})

eye.addEventListener("mouseup",()=>{
    document.querySelector("input").attributes[0].value = ("password");
    eye.attributes[0].value = ("Assets/images/closed-eyes.svg")
})

