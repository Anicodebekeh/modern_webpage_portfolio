const nav = document.querySelector('.nav');
const contactTab = document.querySelector('.contact-tab');
const contactDetails = document.querySelector('.contact-details');
const projectSection = document.querySelector('#projects');
// const links = document.querySelectorAll('.links');
const scrollOptions = {
    threshold:0.6
};

const main = new IntersectionObserver(function (entries, main){
    entries.forEach(entry => {
        if (entry.isIntersecting){
            nav.classList.add('nav-scroll')
            // links.classList.remove('links-on-scroll')
        }else{
            nav.classList.remove('nav-scroll')
        }
    });
}, scrollOptions);

main.observe(projectSection);

contactTab.addEventListener('click', function(e){
    contactDetails.classList.remove('contact-details')
})
