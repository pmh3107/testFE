document.addEventListener("DOMContentLoaded", function () {
	// Get elements Navbar
	var toggleButton = document.getElementById("toggleNavButton");
	var menuOverlay = document.getElementById("overlay");
	var menuDrawer = document.getElementById("drawer");

	// Get elements banner
	const bannerItems = document.querySelectorAll(".banner__item");
	const indicatorItems = document.querySelectorAll(".indicator-banner__item");
	const totalItems = bannerItems.length;
	let currentIndex = 0;

	// Create event for toggle button
	toggleButton.addEventListener("click", toggleMenu);

	// Create event for menu overlay
	menuOverlay.addEventListener("click", closeMenu);

	// Function to open/close navbar
	function toggleMenu() {
		var isMenuOpen = menuDrawer.classList.contains("menu-open");

		if (isMenuOpen) {
			closeMenu();
		} else {
			menuDrawer.classList.add("menu-open");
			menuOverlay.style.opacity = 1;
			menuOverlay.style.visibility = "visible";
		}
	}

	// Function to close navbar
	function closeMenu() {
		menuDrawer.classList.remove("menu-open");
		menuOverlay.style.opacity = 0;
		menuOverlay.style.visibility = "hidden";
	}

	// Function to show current slide
	function showSlide(index) {
		// Hide all slides
		bannerItems.forEach((item) => {
			item.style.transform = `translateX(${-index * 100}%)`;
		});

		// Update active indicator
		indicatorItems.forEach((item) => {
			item.classList.remove("active");
		});
		indicatorItems[index].classList.add("active");
	}

	// Function to handle click on "left" button
	document
		.getElementById("banner__left")
		.addEventListener("click", function () {
			currentIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
			showSlide(currentIndex);
		});

	// Function to handle click on "right" button
	document
		.getElementById("banner__right")
		.addEventListener("click", function () {
			currentIndex = currentIndex === totalItems - 1 ? 0 : currentIndex + 1;
			showSlide(currentIndex);
		});

	// Function to handle click on indicators
	indicatorItems.forEach((item, index) => {
		item.addEventListener("click", function () {
			currentIndex = index;
			showSlide(currentIndex);
		});
	});
	// Show the initial slide
	showSlide(currentIndex);
});

// Loop through all buttons and add click event
document
	.querySelectorAll(".product-card__interact--btn")
	.forEach(function (button) {
		button.addEventListener("click", function () {
			changeHeartColor(button);
		});
	});

// Function to handle changing heart icon color
function changeHeartColor() {
	var icons = document.getElementsByClassName("heart-icon");
	for (var i = 0; i < icons.length; i++) {
		icons[i].classList.toggle("clicked");
	}
}

document.addEventListener("DOMContentLoaded", function () {
	const tipItems = document.querySelectorAll(".tip__item");
	const indicatorItems = document.querySelectorAll(".indicator-tip__item");
	const totalItems = tipItems.length;
	let currentIndex = 0;

	// Function to show current tip item
	function showTipItem(index) {
		// Hide all tip items
		tipItems.forEach((item) => {
			item.style.transform = `translateX(${-index * 100}%)`;
		});

		// Update active indicator
		indicatorItems.forEach((item) => {
			item.classList.remove("active");
		});
		indicatorItems[index].classList.add("active");
	}

	// Function to handle click on "left" button
	document
		.getElementById("tipScrollLeft")
		.addEventListener("click", function () {
			currentIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
			showTipItem(currentIndex);
		});

	// Function to handle click on "right" button
	document
		.getElementById("tipScrollRight")
		.addEventListener("click", function () {
			currentIndex = currentIndex === totalItems - 1 ? 0 : currentIndex + 1;
			showTipItem(currentIndex);
		});

	// Function to handle click on indicators
	indicatorItems.forEach((item, index) => {
		item.addEventListener("click", function () {
			currentIndex = index;
			showTipItem(currentIndex);
		});
	});

	// Show the initial tip item
	showTipItem(currentIndex);
});
