window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.querySelector(".main-content");
  
    // Hide the loading screen and show the main content
    setTimeout(() => {
        loadingScreen.classList.add("hidden");
        mainContent.style.display = "block";
      }, 500);
  });



const all = document.querySelector("#all")
const instruments = document.querySelector("#instruments")
const gadgets = document.querySelector("#gadgets")
const countDoc =  document.querySelector(".resultOfSearch")



function instItems(item){
    return `<div class="item" onclick="console.log("hi")">
            <div class="image"><img src="${item.image}" alt=""></div>
            <div class="title">${item.name}</div>
            <div class="description">${item.description}</div>
            <div class="music">
                <audio class="audio-player" controls>
                    <source src="${item.audio}">
                </audio>
                <img class="playButton" src="/Assets/Photos/playButton.svg" alt="">
                <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" width="400" height="100">
                    <line x1="20" y1="10" x2="20" y2="90" stroke="black" stroke-width="2"/>
                    <line x1="20" y1="50" x2="380" y2="50" stroke="black" stroke-width="2"/>
                </svg> 
                <span class="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <polyline points="14 6 20 12 14 18"></polyline>
                </svg>
                </span>               
            </div>
            
            <p class="price"><span class="realPrice">${item.price}</span>$</p>
            <p class="stock">Stock: ${item.stock}</p>
            <p class="rate hide">${item.rating}</p>
        </div>
    `;
}

function gadgItems(item){
    return `
    <div class="item">
            <div class="image"><img src="${item.image}" alt=""></div>
            <div class="title">${item.name}</div>
            <div class="description">${item.description}</div>
            
            <p class="price"><span class="realPrice">${item.price}</span>$</p>
            <p class="stock">Stock: ${item.stock}</p>
            <p class="rate hide">${item.rating}</p>
        </div>
    `;
}




const fetchData = async()=>{
    const rawData1 = await fetch("https://mocki.io/v1/7765c612-5875-4cbb-afd1-c640e3457da3");
    const rawData2 = await fetch("https://mocki.io/v1/e8dbad7e-0350-489d-a047-17fe9bac6982");
    const data1 = await rawData1.json()
    const data2 = await rawData2.json()
    const merge =[...data1, ...data2];
    const result = merge.sort((a,b)=> a.id -b.id);

    let count=0;
    const list = document.querySelector(".items");
    list.innerHTML = "";
        
    result.forEach((item)=>{
        if(item.audio !=""){
            list.innerHTML+=instItems(item);
        }else{ 
            list.innerHTML+=gadgItems(item);
        }
        count+=1
    });
    audioPlayPause();
    update(count)
    all.addEventListener("click",()=>{
        let count=0;
        const list = document.querySelector(".items");
        list.innerHTML = "";
        
        result.forEach((item)=>{
            if(item.audio !=""){
                list.innerHTML+=instItems(item);
            }else{ 
                list.innerHTML+=gadgItems(item);
            }
            count+=1
        });
        audioPlayPause();
        update(count)
    })
    
    instruments.addEventListener("click",()=>{
        let count=0;
        const list = document.querySelector(".items");
        list.innerHTML = "";
        data1.forEach((item)=>{
            list.innerHTML+=instItems(item);
            count+=1
        })
        audioPlayPause()
        update(count)
    })
    gadgets.addEventListener("click",()=>{
        let count=0;
        const list = document.querySelector(".items");
        list.innerHTML = "";
        data2.forEach((item)=>{
            list.innerHTML+=gadgItems(item);
            count+=1
        });
        update(count)
    })
    

    
}


function audioPlayPause(){
    const items = document.querySelectorAll(".item")
    const mainAudioDisplay = document.querySelector(".audioVolume");
    items.forEach((item)=>{
        const wave = item.querySelector(".wave");
        const playButton = item.querySelector(".playButton");
        const audio = item.querySelector(".audio-player");
        
        if (!playButton || !audio) return;

        playButton.addEventListener("click",()=>{ 
            if(audio.paused){
                audio.play();
                playButton.attributes[1].value = ("/Assets/Photos/pauseButton.svg");
                wave.innerHTML = `<line x1="20" y1="10" x2="20" y2="90" stroke="black" stroke-width="2"/>
      <polyline points="20,50 50,30 80,70 110,30 140,70 170,30 200,70 230,50 260,30 290,70 320,50" 
                stroke="black" stroke-width="2" fill="none"/>`;
                mainAudioDisplay.classList.remove("hide")
                
            }else if(audio.play){
                audio.pause();
                playButton.attributes[1].value = ("/Assets/Photos/playButton.svg");
                wave.innerHTML = `
                <line x1="20" y1="10" x2="20" y2="90" stroke="black" stroke-width="2"/>
                <line x1="20" y1="50" x2="380" y2="50" stroke="black" stroke-width="2"/>
                `;
                mainAudioDisplay.classList.add("hide")

            }
        })
    
        audio.addEventListener("play",()=>{
            items.forEach((others)=>{
                const otherAudio = others.querySelector(".audio-player");
                const otherPlayButton = others.querySelector(".playButton");
                const otherWave = others.querySelector(".wave")
                if(!(otherAudio == null)){
                    if (otherAudio !== audio){
                        otherAudio.pause()
                        audio.currentTime = 0;
                        otherPlayButton.setAttribute("src","/Assets/Photos/playButton.svg")
                        otherWave.innerHTML = `
                    <line x1="20" y1="10" x2="20" y2="90" stroke="black" stroke-width="2"/>
                    <line x1="20" y1="50" x2="380" y2="50" stroke="black" stroke-width="2"/>
                    `;
                    };
                };
            });
        });
        const audioPlayer = item.querySelector(".audio-player")
        const sliderVolume = document.querySelector("#volume-slider");
        const volumeIcon = document.querySelector("#iconVolume");
        sliderVolume.addEventListener("input",()=>{
            audioPlayer.volume = sliderVolume.value
            if(sliderVolume.value == 0){
                volumeIcon.attributes[0].value =("/Assets/Photos/Volumes/volume-xmark-svgrepo-com.svg") 
                
            }else if(sliderVolume.value <0.6){
                volumeIcon.attributes[0].value =("/Assets/Photos/Volumes/volume-min-svgrepo-com.svg") 

            }else{
                volumeIcon.attributes[0].value =("/Assets/Photos/Volumes/volume-max-svgrepo-com.svg") 
            }
            
        })
        audioPlayer.addEventListener("volumechange",()=>{
            sliderVolume.value = audioPlayer.volume;
        })

        
        let volumeStat = false
        volumeIcon.addEventListener("click",()=>{
            volumeStat = !volumeStat
            if(volumeStat){
                sliderVolume.classList.remove("hide")
            }else{
                sliderVolume.classList.add("hide")
            }  
        })
        
        
        
    })
}





const formFilter = document.querySelector("#formFilter");
formFilter.onsubmit = (e)=>{
    e.preventDefault();
    let count=0;
    const minPrice = parseFloat(document.querySelector("#minPrice").value) || 0;
    const maxPrice = parseFloat(document.querySelector("#maxPrice").value) || Infinity;


    const minRate = document.querySelector("#minRate").value;
    const maxRate = document.querySelector("#maxRate").value;

    const features = document.querySelector(".feature-box").querySelectorAll(`input[type="checkbox"]:checked`) || "";
    
    
    const items = document.querySelectorAll(".item");
    items.forEach(item=>{
        const itemPrice = item.querySelector(".realPrice");
        const itemRateRaw = item.querySelector(".rate");
        const itemRate = Math.floor((itemRateRaw.innerHTML * 10) % 10);
        const itemDesc = item.querySelector(".description");

        let priceStat = false;
        let rateStat = false;
        let checkStat = false
        if(minPrice<=itemPrice.innerHTML && itemPrice.innerHTML <= maxPrice || minPrice>=itemPrice.innerHTML && itemPrice.innerHTML >= maxPrice){
            priceStat = true;
        }else{
            priceStat = false;
        }

        if(minRate<=itemRate && itemRate <= maxRate || minRate>=itemRate && itemRate >= maxRate){
            rateStat = true;
            
        }else{
            rateStat = false;
        }
        if(features.length !=0){
            features.forEach(checks=>{
                if(itemDesc.innerHTML.includes(checks.value)){
                    checkStat = true;
                }else{
                    checkStat=false;
                }
    
                if(checkStat && priceStat && rateStat){
                    item.classList.remove("hide"); 
                    count+=1;
                }else{
                    item.classList.add("hide"); 
                    
                }
            }) 
        }else{
            if(priceStat && rateStat){
                item.classList.remove("hide");
                count+=1; 
            }else{
                item.classList.add("hide"); 
                
            }
        }
    })
    update(count)
}

const formSearch = document.querySelector("#formSearch");
formSearch.onsubmit = (e)=>{
    e.preventDefault();
    let count=0;
    const searchInput = formSearch.querySelector("input").value;
    const items = document.querySelectorAll(".item");
    items.forEach(item=>{
        const itemName = (item.querySelector(".title").innerHTML).toLowerCase();
        let searchStat = false;
        if(itemName.includes(searchInput.toLowerCase())){
            searchStat = true;
        }else{
            searchStat = false;
        }
        if(searchStat){
            item.classList.remove("hide")
            count+=1;
        }else{
            item.classList.add("hide")
            
        }
    })
    update(count)
}
function update(count){
    countDoc.innerHTML =`<span id="cnt">${count}</span>
                products found`
}


fetchData()