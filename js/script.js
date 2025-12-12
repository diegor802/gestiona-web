	const toggle = document.getElementById("nav-toggle");
	const menu = document.getElementById("nav-menu");

	toggle.addEventListener("click", () => {
		menu.classList.toggle("active");
	});


// 	gsap.registerPlugin(ScrollTrigger);

// document.querySelectorAll('.counter__number').forEach((num) => {
// 	const target = +num.dataset.target;

// 	gsap.fromTo(num, 
// 		{ textContent: 0 },
// 		{
// 		textContent: target,
// 		duration: 2,
// 		ease: "power1.out",
// 		snap: { textContent: 1 },
// 		scrollTrigger: {
// 			trigger: num,
// 			start: "top 80%",
// 		}
// 		}
// 	);
// 	});

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