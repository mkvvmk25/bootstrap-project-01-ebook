// Add custom JavaScript here
function usercroll() {
	const navbar = document.querySelector(".navbar");
	window.addEventListener("scroll", function () {
		if (this.window.scrollY > 20) {
			navbar.classList.add("bg-dark");
			navbar.classList.add("navbar-sticky");
		} else {
      navbar.classList.remove("bg-dark");
			navbar.classList.remove("navbar-sticky");
		}
	});
}

document.addEventListener("DOMContentLoaded", usercroll);
