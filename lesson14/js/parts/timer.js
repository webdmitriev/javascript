function timer() {
	let deadline = '2018-04-05';
	//new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
	function getTimeRemaining(endtime) {
	    let t = Date.parse(endtime) - Date.parse(new Date()),
	        seconds = Math.floor((t / 1000) % 60),
	        minutes = Math.floor((t / 1000 / 60) % 60),
	        hours = Math.floor((t / (1000 * 60 * 60)));

	    return {
	        'total': t,
	        'hours': hours,
	        'minutes': minutes,
	        'seconds': seconds
	    };

	}

	function setClock(id, endtime) {

	    let timer = document.getElementById(id),
	        hours = timer.querySelector('.hours'),
	        minutes = timer.querySelector('.minutes'),
	        seconds = timer.querySelector('.seconds');

	    function updateClock() {
	        let t = getTimeRemaining(endtime);
	        if (t.total <= 0) {

	            clearInterval(timeInterval);

	        } else {
	            hours.innerHTML = t.hours;
	            minutes.innerHTML = t.minutes;
	            seconds.innerHTML = t.seconds;
	        }
	    }

	    if (getTimeRemaining(endtime).total >= 0) {
	        updateClock();
	        let timeInterval = setInterval(updateClock, 1000);
	    } else {

	        hours.innerHTML = '00';
	        minutes.innerHTML = '00';
	        seconds.innerHTML = '00';
	    }
	}

	setClock('timer', deadline);
}

module.exports = timer;