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


