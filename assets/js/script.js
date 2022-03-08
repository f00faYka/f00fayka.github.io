//functions

//Begin: Resume 
function showResumePage(n) {
	let i;
	let slides = document.getElementsByClassName("resume-slider");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[n].style.display = "block";
}
//End: Resume

//Begin: certificates Slider

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function makeActive(index) {
	let i;
	let images = document.querySelectorAll(".cert-thumbnail-img");
	for (i = 0; i < images.length; i++) {
		images[i].classList.remove("thumb-active");
	}
	images[index].classList.add("thumb-active");
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("certs-slider");
	if (n > slides.length - 1) { slideIndex = 0 }
	if (n < 1) { slideIndex = slides.length - 1 }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex].style.display = "block";
	makeActive(slideIndex);
}

function showSlide(n) {
	let i;
	let slides = document.getElementsByClassName("certs-slider");

	if (n > slides.length) { n = slides.length - 1 }
	if (n < 1) { n = 0 }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[n].style.display = "block";
	slideIndex = n;
	makeActive(slideIndex);
}

//End: certificates Slider

//take all certificates images from html and add to thumbnails
function loadThumb() {
	var i = 0;
	let images = document.querySelectorAll(".cert-img");
	let thumbList = document.querySelector(".certs-thumbnails");
	for (let img of images) {
		//create temporary image
		let tempImg = document.createElement('img');
		//take src of the certificate file
		tempImg.src = img.src;
		tempImg.classList.add('cert-thumbnail-img');
		//add onclick event
		tempImg.setAttribute("onclick", "showSlide(" + i + ")")
		//create Li tag for thumbnail
		let li = document.createElement('li');
		li.appendChild(tempImg);
		//add thumbnail to the thumbnails list
		thumbList.appendChild(li);
		//index of element
		i++;
	}
}
//functions end

//Initializing function page
function initilize() {
	loadThumb();

	//burger menu click
	let burger = document.querySelector(".header-burger");
	burger.addEventListener('click', function () {
		let burger = document.querySelector(".header-burger");
		burger.classList.toggle('active');
		let menu = document.querySelector(".nav-menu");
		menu.classList.toggle('active');
	})
	//burger menu click

	let resumeIndex = 0;
	showResumePage(resumeIndex);
	let slideIndex = 0;
	showSlide(slideIndex);
}

