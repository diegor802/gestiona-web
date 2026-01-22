function loadPartial(id, file) {
	fetch(file)
		.then((res) => res.text())
		.then((html) => {
			document.getElementById(id).innerHTML = html;
		});
}

loadPartial("header", "partials/header.html");
loadPartial("nav", "partials/nav.html");
loadPartial("footer", "partials/footer.html");

function setActiveMenu() {
	const currentPage = window.location.pathname.split("/").pop();

	const links = document.querySelectorAll("nav a");

	links.forEach((link) => {
		const linkPage = link.getAttribute("href");

		if (linkPage === currentPage) {
			link.classList.add("active");
		}
	});
}
