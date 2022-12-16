// function axios(URL){
//     return new Promise((resolve, reject) => {
//         fetch(URL).then(response =>{(response.json());
//         }).then(FormatedData => {
//             if(Array.isArray(FormatedData)){
//                 resolve(FormatedData);
//             }
//             if(statuscode === 404){
//                 throw 'hoes gonna suffer';
//             }
//         })
//         .catch(err =>{
//             reject(err);
//         })
//     })
// }
// axios('https://fakestoreapi.com/products')
// .then(FormatedData => {
//     console.log('data',FormatedData)
//     const wrapper = document.querySelector('.cards')

//     FormatedData.forEach(element => {

//         const card = document.createElement('div')
//         card.setAttribute('class','card')

//         const title = document.createElement('h3')
//         title.setAttribute('class','title')
//         title.textContent = element.title
        
//         const price = document.createElement('h4')
//         price.setAttribute('class','ptice')
//         price.textContent = element.price

//         const img = document.createElement('img')
//         img.src = element.image;

//         const description = document.createElement('p')
//         description.setAttribute('class','description')
//         description.textContent = element.description

//         card.append(title,price,img,description)
//         wrapper.append(card)

// }).catch(err =>{
//     return(err)
// })


fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then( FormatedData =>{
    const wrapper = document.querySelector('.cards')

    FormatedData.forEach(element => {

        const card = document.createElement('div')
        card.setAttribute('class','card')

        const title = document.createElement('h3')
        title.setAttribute('class','title')
        title.textContent = element.title
        
        const price = document.createElement('h4')
        price.setAttribute('class','ptice')
        price.textContent = element.price

        const description = document.createElement('p')
        description.setAttribute('class','description')
        description.textContent = element.description

        const img = document.createElement('img')
        img.src = element.image;


        card.append(title,price,description,img)
        wrapper.append(card)

    });
})

// function myAsyncFunction(){
//   return new Promise((resolve, reject) => {
//     if (rndInt > 50 ){
//       resolve('you win', + rndInt);
//     }
//       reject('you lose', + rndInt);
//   })
// }

// const rndInt = Math.floor(Math.random() * 100) + 1
// console.log(rndInt)

// myAsyncFunction().then((response) => {
//   console.log('response', response)
// }).catch((err)=>{
//   console.log('catch',err)
// })
