document.addEventListener("DOMContentLoaded", () => {
	/* ============== NAV ================== */
	const navToggle = document.getElementById("nav-toggle");
	const navMenu = document.getElementById("nav-menu");

	if (navToggle && navMenu) {
		navToggle.addEventListener("click", () => {
			navMenu.classList.toggle("active");
		});
	}

	/* ============== CONTADORES ================== */
	const statsNumbers = document.querySelectorAll(".stats__number");
	let statsStarted = false;

	function animateStats() {
		statsNumbers.forEach((num) => {
			const target = +num.dataset.target;
			const prefix = num.dataset.prefix || "";
			const suffix = num.dataset.suffix || "";
			const locale = num.dataset.locale || "en-US";

			let count = 0;
			const step = target / 120;

			const update = () => {
				if (count < target) {
					count += step;
					num.textContent = `${prefix}${Math.floor(count).toLocaleString(
						locale
					)}${suffix}`;
					requestAnimationFrame(update);
				} else {
					num.textContent = `${prefix}${target.toLocaleString(
						locale
					)}${suffix}`;
				}
			};

			num.classList.add("visible");
			update();
		});
	}

	const statsCard = document.querySelector(".stats");

	if (statsCard) {
		const statsObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !statsStarted) {
					statsStarted = true;
					animateStats();
				}
			});
		});

		statsObserver.observe(statsCard);
	}

	/* ============== CLIENTES (LOGOS) ================== */
	const clientesToggle = document.querySelector(".clientes__toggle");
	const clientesGrid = document.querySelector(".clientes__grid");

	if (clientesToggle && clientesGrid) {
		clientesToggle.addEventListener("click", () => {
			clientesGrid.classList.toggle("is-open");
			clientesToggle.classList.toggle("is-open");
		});
	}


	const clientesSection = document.querySelector(".clientes");

	toggleBtn.addEventListener("click", () => {
		logosGrid.classList.toggle("is-open");
		toggleBtn.classList.toggle("is-open");
		clientesSection.classList.toggle("is-open");
	});

});
