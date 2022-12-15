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

// ==============================================================
const dataAraay = [
  {
      CardTitle: 'flight booking',
      Context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
      cardImage: 'images/travel-photos/airplane.png',
  },
  {
      CardTitle: 'hotel & resort booking',
      Context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
      cardImage: 'images/travel-photos/resort.png',
  },
  {
      CardTitle: 'family trip planner',
      Context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
      cardImage: 'images/travel-photos/family-trip.png',
  },
  {
    CardTitle: 'cruise tour',
    Context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
    cardImage: 'images/travel-photos/cruise.png',
  },
  {
    CardTitle: 'fire camp',
    Context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
    cardImage: 'images/travel-photos/fire-camp.png',
  },
  {
    CardTitle: 'corporate holidays',
    Context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
    cardImage: 'images/travel-photos/corporate-holidays.png',
  },
]

// MODAL
const wrapper = document.querySelector('.travel-options-main-cont')
const wrapperModal = document.querySelector('.wrapper-modal')

function renderCards(arr,path){
  arr.forEach(element => {
      const card = document.createElement('div')
      card.setAttribute('class','card')
      const modall = document.createElement('div')
      modall.setAttribute('class','modal')
      

      const cardImg = document.createElement('img')
      cardImg.setAttribute('src',element.cardImage)
       const cardTitle = document.createElement('h3')
        cardTitle.setAttribute('class','card-title')
        cardTitle.textContent = element.CardTitle
        const context = document.createElement('h4')
        context.setAttribute('class','context')
        context.textContent = element.Context
  

      card.append(cardImg,cardTitle,context)
      path.append(card)
      modall.append(card)
      wrapperModal.append(modall)
      wrapper.append(wrapperModal)    
  });
}
renderCards(dataAraay,wrapper);

const modal = document.querySelectorAll('.modal')
modal.forEach( (elem) => {
  elem.addEventListener('click',() => {
    elem.classList.toggle('active')
  })
})