let count = 0;
const form = document.querySelector("form");
const list = document.querySelector(".list")
const itemCount = document.querySelector("#Count");
const alert = document.querySelector("#alert");
const currentLogin = JSON.parse(window.localStorage.getItem("currentLogin"));

console.log(currentLogin)

function rem(currentLogin, itemValue) {
    const index = currentLogin.content.indexOf(itemValue); // Find the index of the item
    if (index !== -1) {
        currentLogin.content.splice(index, 1); // Remove it if found
    }
    return currentLogin.content;
}

form.onsubmit=(event)=>{
    event.preventDefault();

    const searcInput = document.querySelector("#search");
    alertStatus = false;
    if(searcInput.value == ""){
        alertStatus = true;
    }else{
        alertStatus = false;
    }
    
    if(alertStatus){
        return alert.innerHTML = "Please fill the gap";
    }else{
        alert.innerHTML = "";
    }

    const item = document.createElement("div");
    item.classList.add("item","animate__animated","animate__fadeInDown");
    

    const work = document.createElement("p");
    work.classList.add("work");
    work.innerText = searcInput.value;

    
    const buton = document.createElement("button");
    buton.classList.add("trash");
    buton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="#ffffff">
         <rect x="110" y="-10" width="300" height="48" rx="8" ry="8" />
         <rect x="30" y="44" width="460" height="48" rx="8" ry="8" />
         <rect x="96" y="128" width="320" height="320" rx="16" ry="1000" />
     </svg>`;

    item.append(work);
    item.append(buton);
    list.append(item);

    currentLogin.content.push(searcInput.value);
    count++;
    let status = false;

    item.addEventListener("click",()=>{
        status = !status;
        if(status){
            item.style.textDecoration = "line-through";
            item.style.backgroundColor= "#d8d8d8";
            count--;
            itemCount.innerText = `You have ${count} pending tasks`;
        }
        else{
            item.style.textDecoration = "none";
            item.style.backgroundColor= "#f2f2f2";
            count++;
            itemCount.innerText = `You have ${count} pending tasks`;
        }
    })


    buton.addEventListener("mouseup",(e)=>{
        e.preventDefault();
        
        item.classList.remove("animate__fadeInDown");
        item.classList.add("animate__bounceOutLeft");
        
        setTimeout(()=>{
            item.remove();
            rem(currentLogin, work.innerText); 
        },400);
        if(status){
            count--;
        }

    })


    const clear = document.querySelector("#clear");
    clear.addEventListener("click",()=>{

        item.classList.remove("animate__fadeInDown");
        item.classList.add("animate__bounceOutLeft");
        
        setTimeout(()=>{
            list.innerHTML = ``
            currentLogin.content = [];
        },400);
        
        count = 0;
        itemCount.innerText = `You have ${count} pending tasks`;
    })
    console.log(currentLogin);


    if(count>5){
        list.style.overflowY = "scroll";
        list.style.overflowX = "hidden";
    }

    searcInput.value = "";
    itemCount.innerText = `You have ${count} pending tasks`;

    window.localStorage.setItem("currentLogin",JSON.stringify(currentLogin))
}

const lightButton = document.querySelector(".lightToggler");
const nightButton = document.querySelector(".nightToggler");
const mode = window.localStorage.getItem("mode");
const mainBox = document.querySelector(".main-box");
const loginLink = document.querySelector("#ll");

function lightToDark(){
    lightButton.style.display = "none";
    nightButton.style.display = "block";
    mainBox.classList.add("main-box2");
    loginLink.classList.add("logBtn");
    document.body.style.background = "linear-gradient(180deg,rgb(11, 75, 75),rgb(22, 21, 72))";
}
function darkToLight(){
    nightButton.style.display = "none";
    lightButton.style.display = "block";
    mainBox.classList.remove("main-box2");
    loginLink.classList.remove("logBtn");
    document.body.style.background = "linear-gradient(180deg,rgb(33, 222, 222),rgb(55, 53, 182))";
}

lightButton.addEventListener("click",()=>{
    lightToDark();
    window.localStorage.setItem("mode","Dark");
})
nightButton.addEventListener("click",()=>{
    darkToLight();
    window.localStorage.setItem("mode","Light");
});

if (mode == "Dark"){
    lightToDark();
}else if(mode == "Light"){
    darkToLight();
}


const welcome = document.querySelector("#welcome");
setTimeout(()=>{
    welcome.style.animation ="welcome 2.7s forwards";
},1000)

welcome.innerHTML = `Welcome ${currentLogin.username}!`