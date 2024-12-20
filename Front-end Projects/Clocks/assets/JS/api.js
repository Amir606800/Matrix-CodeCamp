fetch("https://dummyjson.com/products")
.then(res=>res.json())
.then(data=>{
    let li = "";
    products = data.products;
    products.map(item=>{
        li=li+`
        <div class="card">
        <div class="inside">
        <div class="imageBox">
        <img class="photo" src="${item.images[0]}">
        <span class="discount">${discount(item)}</span>
        </div>
        <p class="Title">${item.title}</p>
        <p class="Description">${item.description}</p>
        <h3>Price:  ${item.price}</h3>
        </div>
        </div>
        `;
    })
    document.querySelector(".List").innerHTML = li;
});

function discount(item){
    if(item.discountPercentage > 5){
        return item.discountPercentage+"%";
    }else{
        return ``;
    }
}