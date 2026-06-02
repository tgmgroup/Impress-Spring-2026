// Slideshow 1
let slideIndex1 = 1;

function plusSlides1(n) {
	showSlides1((slideIndex1 += n));
	stopAllAudio();
}

function currentSlide1(n) {
	showSlides1((slideIndex1 = n));
	stopAllAudio();
}

function showSlides1(n) {
	const slides = document.getElementsByClassName("mySlides1");
	const thumbnails = document.getElementsByClassName("thumbnail1");

	// Guard rail: Don't do anything if elements aren't loaded yet
	if (slides.length === 0 || thumbnails.length === 0) return;

	if (n > slides.length) slideIndex1 = 1;
	if (n < 1) slideIndex1 = slides.length;

	for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
	for (let i = 0; i < thumbnails.length; i++) {
		thumbnails[i].className = thumbnails[i].className.replace(
			" active-thumbnail",
			"",
		);
	}

	slides[slideIndex1 - 1].style.display = "flex";
	if (thumbnails[slideIndex1 - 1]) {
		thumbnails[slideIndex1 - 1].className += " active-thumbnail";
	}
}

// Slideshow 2
let slideIndex2 = 1;

function plusSlides2(n) {
	showSlides2((slideIndex2 += n));
	stopAllAudio();
}

function currentSlide2(n) {
	showSlides2((slideIndex2 = n));
	stopAllAudio();
}

function showSlides2(n) {
	const slides = document.getElementsByClassName("mySlides2");
	const thumbnails = document.getElementsByClassName("thumbnail2");

	// Guard rail: Don't do anything if elements aren't loaded yet
	if (slides.length === 0 || thumbnails.length === 0) return;

	if (n > slides.length) slideIndex2 = 1;
	if (n < 1) slideIndex2 = slides.length;

	for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
	for (let i = 0; i < thumbnails.length; i++) {
		thumbnails[i].className = thumbnails[i].className.replace(
			" active-thumbnail",
			"",
		);
	}

	slides[slideIndex2 - 1].style.display = "flex";
	if (thumbnails[slideIndex2 - 1]) {
		thumbnails[slideIndex2 - 1].className += " active-thumbnail";
	}
}

// The only place initialization should happen
document.addEventListener("DOMContentLoaded", () => {
	showSlides1(slideIndex1);
	showSlides2(slideIndex2);
});
