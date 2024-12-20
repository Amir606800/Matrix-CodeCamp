const analog = document.querySelector(".analog");
const digital = document.querySelector(".digital");
const changeButton = document.querySelector("#change");
const onOff = document.querySelector("#onOff")
const screen = document.querySelector(".screen");

const minuteHand = document.querySelector(".minute-Hand");
const hourHand = document.querySelector(".hour-Hand");
const secondHand = document.querySelector(".second-Hand");

const digiHours = document.querySelector("#hours");
const digiMinutes = document.querySelector("#minutes");
const digiSeconds = document.querySelector("#seconds");

const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

const veziyyet = document.querySelector("#Date");
const tarix = new Date();
const day = tarix.getDate();
const year = tarix.getFullYear();
const month = monthNames[tarix.getMonth()]; 

veziyyet.innerHTML = `${day}th ${month} ${year}`;

setInterval(() => {
    const time = new Date();

    const hours = time.getHours();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();

    

    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6 ; 
    const secondDeg = seconds* 6; 
    minuteHand.style.transform =`rotate(${270 + minuteDeg}deg)`;
    hourHand.style.transform =`rotate(${270 + hourDeg}deg)`;
    secondHand.style.transform =`rotate(${270 + secondDeg}deg)`;

    digiHours.innerHTML = String(hours).padStart(2,"0");
    digiMinutes.innerHTML = String(minutes).padStart(2,"0");
    digiSeconds.innerHTML = String(seconds).padStart(2,"0");

},1000);

analog.addEventListener("click",()=>{
    analog.classList.add("analogForward");
    analog.classList.remove("analogBack");
    setTimeout(() => {
        digital.style.zIndex = "1";
        document.querySelector("h1").innerHTML = "Another Clock"
    }, 2500);
    setTimeout(() => {
        digital.classList.remove("d-none");
    }, 100);
})
changeButton.addEventListener("click",()=>{
    analog.classList.remove("analogForward");
    analog.classList.add("analogBack");
    digital.style.zIndex = "-1"
    setTimeout(() => {
        digital.classList.add("d-none");
    }, 2000);

})
let turnStatus = true
const content = document.querySelector(".content");
onOff.addEventListener("click",()=>{
    turnStatus = !turnStatus;
    if(turnStatus){
        content.classList.add("d-none");
        screen.style.backgroundColor = "black"
    }else{
        setTimeout(() => {
            content.classList.remove("d-none");
        screen.style.backgroundColor = "#95c59e"
        }, 500);   
    }
})
