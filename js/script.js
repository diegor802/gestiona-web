const toggle = document.getElementById("nav-toggle");
	const menu = document.getElementById("nav-menu");

	toggle.addEventListener("click", () => {
		menu.classList.toggle("active");
	});

/* ============== Contadores de la Card ==================*/

const statsNumbers = document.querySelectorAll('.stats__number');
let statsStarted = false;

function animateStats(){
	statsNumbers.forEach(num => {
		const target = +num.dataset.target;
		const prefix = num.dataset.prefix || "";
		const suffix = num.dataset.suffix || "";
		const locale = num.dataset.locale || "en-US";

		let count = 0;
		const step = target / 120;

		const update = () => {
		if (count < target){
			count += step;
			num.textContent = `${prefix}${Math.floor(count).toLocaleString(locale)}${suffix}`;
			requestAnimationFrame(update);
		} else {
			num.textContent = `${prefix}${target.toLocaleString(locale)}${suffix}`;
		}
		};

		num.classList.add('visible');
		update();
	});
}

const statsObserver = new IntersectionObserver (entries =>{
	entries.forEach(entry => {
		if (entry.isIntersecting && !statsStarted){
			statsStarted = true;
			animateStats();
		}
	});
});

statsObserver.observe(document.querySelector('.stats-card'));

/* ============== ACCIÓN DE LAS FLECHAS (LOGOS) ==================*/

const toggleBtn = document.querySelector(".clientes__toggle");
const logosGrid = document.querySelector(".clientes__grid");

toggleBtn.addEventListener("click", () => {
	logosGrid.classList.toggle("is-open");
	toggleBtn.classList.toggle("is-rotated");
});
