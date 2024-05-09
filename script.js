//Add active class to the current nav-item
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach((item) => {
	item.addEventListener('click', () => {
		navItems.forEach((navItem) => navItem.classList.remove('active'));
		item.classList.add('active');
	});
});

// Toggle Darkmode & Lightmode
const darkmodeSpan = document.querySelector('.theme');
const darkmode = localStorage.getItem('darkmode');
darkmode == 'true' && document.body.classList.add('darkmode');
if(darkmode == 'true') {
	const cards =document.querySelectorAll('.project-card')
	cards.forEach(item=>{
item.classList.add('cardDarkmode');
	})
	}
darkmodeSpan.addEventListener('click', () => {
	const darkmode = localStorage.getItem('darkmode');
	if (darkmode == 'false') {
		document.body.classList.add('darkmode');
		localStorage.setItem('darkmode', 'true');
		if(darkmode == 'true') {
			const cards =document.querySelectorAll('.project-card')
			cards.forEach(item=>{
		item.classList.add('cardDarkmode');
			})
			}
	} else {
		document.body.classList.remove('darkmode');
		localStorage.setItem('darkmode', 'false');
		if(darkmode == 'true') {
			const cards =document.querySelectorAll('.project-card')
			cards.forEach(item=>{
		item.classList.remove('cardDarkmode');
			})
			}
	}
});

// Toggle HamburgerMenu
document.querySelector('.menu-btn').addEventListener('click', function () {
	this.classList.toggle('open');
	document.querySelector('.nav-items').classList.toggle('sideNavActive');
});

// scroll functionality that navigates to specific sections
function scrollToSection(sectionId) {
	const section = document.querySelector(sectionId);
	if (section) {
		window.scrollTo({
			top: section.offsetTop,
			behavior: 'smooth',
		});
	}
}

// Script to close the sidenav when clicking outside of it
document.addEventListener('click', function (event) {
	var clickInside = document.querySelector('.menu-btn').contains(event.target);
	if (!clickInside) {
		document.querySelector('.nav-items').classList.remove('sideNavActive');
		document.querySelector('.menu-btn').classList.remove('open')
	}
});

// Hide Navbar on Scroll Down
let prevScrollpos = window.scrollY;
window.onscroll = function() {
let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.marginTop = "0";
  } else {
    document.querySelector("nav").style.marginTop = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

// Slide
const IsreadytoSlide = window.matchMedia("(max-width:700px)").matches
IsreadytoSlide && setInterval(() => carousel(), 3000)
let slideIndex = 0;
const carousel = () => {
	let slides = document.querySelectorAll('.project-card');
	slides.forEach((slide) => {
		return (slide.style.display = 'none');
	});
	slideIndex += 1;
	slideIndex > slides.length && (slideIndex = 1);
	slides[slideIndex - 1].style.display = 'flex';
};
