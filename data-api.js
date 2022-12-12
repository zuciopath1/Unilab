
fetch('https://fakestoreapi.com/products').then((data) => {
    return data.json(); 
}).then((completeData)=>{
    let data1 = "";
    completeData.map((values)=>{
        data1 +=` <  <div class="data-api">
        <h1 class="fake-title">title${values.title}</h1>
        <img src="${values.image}" alt="img">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`
    });
    document.querySelector(".cards").innerHTML = data1;
}).catch((err)=>{
    console.log(err);
});