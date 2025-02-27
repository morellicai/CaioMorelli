window.sr = ScrollReveal({reset: true})
const toTop= document.querySelector(".back-top")

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    if(scrollTop > 75){
        toTop.classList.add("active")
    }else{
        toTop.classList.remove("active")
    }
})

const burger= document.querySelector(".burger")
const sidebar= document.querySelector(".links")
const links= document.querySelectorAll(".links li a")

burger.addEventListener("click", toggleSidebar)

links.forEach(link => {
    link.addEventListener("click", toggleSidebar)
})

function toggleSidebar(){
    sidebar.classList.toggle("show")
}

sr.reveal('.container', {
    duration: 1000,
    origin: 'left',
    distance: '400px'
});
sr.reveal('.skills', {
    duration: 1500,
    origin: 'right',
    distance: '1500px'
});
sr.reveal('.img', {
    duration: 1000,
    origin: 'right',
    distance: '600px'
})
sr.reveal('.project', {
    duration: 1600,
    origin: 'left',
    distance: '1500px'
})
