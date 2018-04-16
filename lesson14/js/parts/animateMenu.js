function animateMenu() {
	function animate(draw, duration) {
	    let start = performance.now(); //возвращаем временную метку
	    requestAnimationFrame(function animate(time) {
	        // при помощи requestAnimationFrame мы занимаемся анимацией
	        let timePassed = time - start;
	        if (timePassed > duration) {
	            timePassed = duration;
	        }
	        draw(timePassed);
	        if (timePassed < duration) {
	            requestAnimationFrame(animate);
	        }
	    });
	}
	let menu = document.getElementsByTagName('nav')[0];
	menu.addEventListener('click', (event) => {
	    event.preventDefault();
	    animate(function(timePassed) {
	        let target = event.target;
	        if (target.tagName = 'li') {
	            let section = document.getElementById(target.getAttribute('href').slice(1));
	            window.scrollBy(0, section.getBoundingClientRect().top / 20);
	        }
	    }, 1500);

	});
}

module.exports = animateMenu;