const nav = document.querySelector('.nav')
const projectSection = document.querySelector('#projects');
const scrollOptions = {
    // rootMargin: "10px 0px 0px 0px"
};

const main = new IntersectionObserver(function (entries, main){
    entries.forEach(entry => {
        if (entry.isIntersecting){
            console.log("intersect")
            console.log(entries)
            nav.classList.add('nav-scroll')
        }else{
            nav.classList.remove('nav-scroll')
        }
    });
}, scrollOptions);

main.observe(projectSection);
