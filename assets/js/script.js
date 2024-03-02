document.addEventListener("DOMContentLoaded", function () {
	// Get elements Navbar
	var toggleButton = document.getElementById("toggleNavButton");
	var menuOverlay = document.getElementById("overlay");
	var menuDrawer = document.getElementById("drawer");
	// get Element banner
	const bannerItems = document.querySelectorAll(".banner__item");
	const indicatorItems = document.querySelectorAll(".indicator-banner__item");
	const totalItems = bannerItems.length;
	let currentIndex = 0;

	// Create event
	toggleButton.addEventListener("click", function () {
		toggleMenu();
	});

	// Create event
	menuOverlay.addEventListener("click", function () {
		closeMenu();
	});

	//close navber
	function closeMenu() {
		menuDrawer.classList.remove("menu-open");
		menuOverlay.style.opacity = 0;
		menuOverlay.style.visibility = "hidden";
	}

	// Open/close navbar
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
