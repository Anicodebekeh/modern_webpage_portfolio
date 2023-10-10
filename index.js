const nav = document.querySelector(".nav");
const contactTab = document.querySelector(".contact-tab");
const contactDetails = document.querySelector(".contact-details");
const projectSection = document.querySelector("#projects");
const menu = document.querySelector('.menu');
const navLink = document.querySelector('.nav-links');
const scrollOptions = {
  threshold: 0.6,
};

const main = new IntersectionObserver(function (entries, main) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nav.classList.add("nav-scroll");
    } else {
      nav.classList.remove("nav-scroll");
    }
  });
}, scrollOptions);

main.observe(projectSection);

contactTab.addEventListener("click", function (e) {
  contactDetails.classList.remove("contact-details");
});


menu.addEventListener('click', function(){
    console.log(navLink)
    navLink.style.display='block'
})

