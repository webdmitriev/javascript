function modal() {
	let more = document.querySelector('.more'),
	        overlay = document.querySelector('.overlay'),
	        close = document.querySelector('.popup-close'),
	        descrBtn = document.querySelectorAll('.description-btn');

	    overlay.classList.remove('fade');
	    overlay.classList.add('rollIn');

	    more.addEventListener('click', function() {
	        this.classList.add('more-splash');
	        overlay.style.display = 'block';
	        document.body.style.overflow = 'hidden';
	    });

	    for (let i = 0; i < descrBtn.length; i++) {
	        descrBtn[i].addEventListener('click', function() {
	            this.classList.add('more-splash');
	            overlay.style.display = 'block';
	            document.body.style.overflow = 'hidden';
	        });
	    }

	    close.addEventListener('click', () => {
	        more.classList.remove('more-splash');
	        overlay.style.display = 'none';
	        document.body.style.overflow = '';
	    });
}

module.exports = modal;