/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let sections = document.querySelectorAll("section");
let navBar = document.querySelector("#navbar__list");
let navElments = "";
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
nvaBarLinksFunction();
// this function add each section dataset as link name and add it to navbar
function nvaBarLinksFunction() {
  sections.forEach(function (element) {
    //add each elment to the string
    navElments += `<li><a class="menu__link" href="#${element.id}">${element.dataset.nav}</a></li>`;
  });
  navBar.innerHTML = navElments; //add all elements of string into the navbar
}
//remove active form hidden section
function removeActiveClass(element) {
  let id = element.getAttribute("id");
  document.querySelector(`#${id}`).classList.remove("your-active-class");
}
// to add active to the section
function addActiveClass(element) {
  let id = element.getAttribute("id");
  document.querySelector(`#${id}`).classList.add("your-active-class");
}
function addActiveClassToCurrentSection() {
  sections.forEach(function (el) {
    elBounds = el.getBoundingClientRect(); //get bounds of current viewport section
    if (elBounds.top <= 150 && elBounds.bottom >= 150) {
      addActiveClass(el);
    } else {
      removeActiveClass(el);
    }
  });
}
//when scroll it will check the offset of current viewport
document.addEventListener("scroll", addActiveClassToCurrentSection);

//to hide and show the button
let btn = document.getElementById("topBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 25) {
    //here the button will be shown
    btn.style.display = "block";
    // console.log("here");
  } else {
    //here will be disapper
    btn.style.display = "none";
  }
};
// this will scroll to back to top of screen
btn.addEventListener("click", function () {
  document.body.scrollTop = 0;
});
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
