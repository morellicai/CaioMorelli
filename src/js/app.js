window.sr = ScrollReveal({reset: true})
const toTop = document.querySelector(".back-top")

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    if(scrollTop > 75){
        toTop.classList.add("active")
    }else{
        toTop.classList.remove("active")
    }
})

const burger = document.querySelector(".burger")
const sidebar = document.querySelector(".links")
const links = document.querySelectorAll(".links li a")

burger.addEventListener("click", toggleSidebar)

links.forEach(link => {
    link.addEventListener("click", toggleSidebar)
})

function toggleSidebar(){
    sidebar.classList.toggle("show")
}
const janela = window.screen.width
if(janela >= 768){
    console.log(janela);
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
}



document.querySelectorAll(".carousel").forEach((carousel) => {
	const track = carousel.querySelector(".carousel-track");
	const slides = Array.from(track.children);

	let index = 0;
	let slideWidth = slides[0].getBoundingClientRect().width;

	function updatePosition() {
		track.style.transform = `translateX(-${index * slideWidth}px)`;
	}

	function nextSlide() {
		index++;

		if (index >= slides.length) {
			index = 0;
			track.style.transition = "none";
			updatePosition();

			// força reflow
			track.offsetHeight;

			track.style.transition = "transform 0.6s ease-in-out";
		} else {
			updatePosition();
		}
	}

	// atualiza largura em resize (importante!)
	window.addEventListener("resize", () => {
		slideWidth = slides[0].getBoundingClientRect().width;
		updatePosition();
	});

	setInterval(nextSlide, 3000);
});

