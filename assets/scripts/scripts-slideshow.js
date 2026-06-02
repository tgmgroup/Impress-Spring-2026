let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let thumbnails = document.getElementsByClassName("thumbnail");

	// Guard rail: Stop if the elements don't exist yet
	if (slides.length === 0) return;

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < thumbnails.length; i++) {
		thumbnails[i].className = thumbnails[i].className.replace(
			" active-thumbnail",
			"",
		);
	}

	// Display the current slide safely
	slides[slideIndex - 1].style.display = "flex";

	// Make sure the matching thumbnail exists before modifying its class
	if (thumbnails[slideIndex - 1]) {
		thumbnails[slideIndex - 1].className += " active-thumbnail";
	}
}

// Initialize safely when the DOM is completely ready
document.addEventListener("DOMContentLoaded", () => {
	showSlides(slideIndex);
});
