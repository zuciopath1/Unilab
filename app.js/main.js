const menu = document.querySelector(".burgerMenu");
const menuItems = document.querySelectorAll(".burgerItems");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");


hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )
// =============================================
// CAROUSEL

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
// 
//

const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modalBtn');


// const bkContEle = document.querySelectorAll('.booking-container'); // Get all container in an array

// const getTextEle = bkContEle[3].getElementsByClassName('modal-text')[0];

// const txt = document.createTextNode("Changin text even a more secure way to protect from XSS attacks");
// getTextEle.replaceWith(txt);



modalBtn.addEventListener('click', showModal);
modal.addEventListener('click', removeModal)



document.addEventListener('click', function (multimodal) {
  if ( multimodal.target.classList.contains( 'modalBtn' ) ) {
    showModal();
  }
  if ( multimodal.target.classList.contains( 'modal' ) ) {
    removeModal();
  }
}, false);

function showModal() {
  document.querySelector('.modal').style.display = "flex";
}

function removeModal() {
  document.querySelector('.modal').style.display = "none";
}
















// ==============================================================
const dataAraay = [
  {
      cardId:1,
      CardTitle: 'flight booking',
      Context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
      cardImage: 'images/travel-photos/airplane.png',
  },
  {
      cardId: 2,
      CardTitle: 'hotel & resort booking',
      Context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
      cardImage: 'images/travel-photos/resort.png',
  },
  {
      cardId: 3,
      CardTitle: 'family trip planner',
      Context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
      cardImage: 'images/travel-photos/family-trip.png',
  },
  {
    cardId: 4,
    CardTitle: 'cruise tour',
    Context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
    cardImage: 'images/travel-photos/cruise.png',
  },
  {
    cardId: 5,
    CardTitle: 'fire camp',
    Context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
    cardImage: 'images/travel-photos/fire-camp.png',
  },
  {
    cardId: 6,
    CardTitle: 'corporate holidays',
    Context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
    cardImage: 'images/travel-photos/corporate-holidays.png',
  },
]
// const wrapper = document.querySelector('.travel-options-main-cont')
// const wrapperModal = document.querySelector('.wrapper-modal')
// const modal = document.querySelector('.modal');
// const modalBtn = document.querySelector('.modalBtn');


// function renderCards(arr,path){
//   arr.forEach(element => {
//     const hotServices = document.createElement('div')
//     const modal = document.createElement('div')
//     modal.setAttribute('class','modal')
//       const card = document.createElement('div')
//       card.setAttribute('class','card')
     
      

//       const cardImg = document.createElement('img')
//       cardImg.setAttribute('src',element.cardImage)
//       const cardTitle = document.createElement('h3')
//       cardTitle.setAttribute('class','card-title')
//       cardTitle.textContent = element.CardTitle
//       const context = document.createElement('h4')
//       context.setAttribute('class','context')
//       context.textContent = element.Context
      

//       // wrapper.append(hotServices)
//       // hotServices.append(cardImg)
//       card.append(cardImg,cardTitle,context)
//       modal.append(card)
//       path.append(modal)
      
//       wrapper.append(cardImg)
      
      
    
//   });
// }
// renderCards(dataAraay,wrapperModal,wrapper)

// document.addEventListener('click', function (multimodal) {
//   if ( multimodal.target.classList.contains( 'modalBtn' ) ) {
//     showModal();
//   }
//   if ( multimodal.target.classList.contains( 'modal' ) ) {
//     removeModal();
//   }
// }, false);

// function showModal() {
//   document.querySelector('.modal').style.display = "flex";
// }

// function removeModal() {
//   document.querySelector('.modal').style.display = "none";
// }


// wrapper.addEventListener('click', showModal);
// modal.addEventListener('click', removeModal);


// const URL = "https://reqres.in/api/products/3";

// async function getDataFromApi(URL) {
// const response = await fetch(URL);
// let data = await response.json();
// console.log(data);
// }

// getDataFromApi(URL);

