function calc() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
        restDays = document.getElementsByClassName('counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;
        totalValue.style.color = '#fff';

        persons.addEventListener('change', function () {
            if (parseInt(this.value) < 0 ) {
                this.value = '';
            }
            personsSum = +this.value;
            total = (daysSum + personsSum)*4000;
            if ( restDays.value == '' ) {
                totalValue.innerHTML = 0;
            } else {
                place.selectedIndex = "0";
                totalValue.style.color = '#fff';
                let count = parseInt(totalValue.innerHTML);
                let timer = setInterval(() => {
                    if ( total > count ) {
                        count += 100;
                        totalValue.innerHTML = count;    
                    } else if ( total < count ) {
                        count -= 1000;
                        totalValue.innerHTML = count;    
                    } else if (total == count) {

                        totalValue.style.color = '#c78030';
                        clearInterval(timer);
                    }
                }, 10);
            }
        });

        restDays.addEventListener('change', function () {
            if (parseInt(this.value) < 0 ) {
                this.value = '';
            }
            daysSum = +this.value;
            total = (daysSum + personsSum)*4000;
            if ( persons.value == '' ) {
                totalValue.innerHTML = 0;
            } else {
                place.selectedIndex = "0";
                totalValue.style.color = '#fff';
                let count = parseInt(totalValue.innerHTML);
                let timer = setInterval(() => {
                    if ( total > count ) {
                        count += 100;
                        totalValue.innerHTML = count;    
                    } else if ( total < count ) {
                        count -= 100;
                        totalValue.innerHTML = count;    
                    } else if (total == count) {

                        totalValue.style.color = '#c78030';
                        clearInterval(timer);
                    }
                }, 10);
            }
        });

        place.addEventListener('change', function () {

           if ( restDays.value == '' || persons.value == '' ) {
                totalValue.innerHTML = 0;
           } else {
            let a = total;
            let newTotal = a * this.options[this.selectedIndex].value;
            totalValue.style.color = '#fff';
            let count = parseInt(totalValue.innerHTML);
            let timer = setInterval(() => {
                if ( newTotal > count ) {
                    count += 100;
                    totalValue.innerHTML = count;    
                } else if ( newTotal < count ) {
                    count -= 100;
                    totalValue.innerHTML = count;    
                } else if (newTotal == count) {

                    totalValue.style.color = '#c78030';
                    clearInterval(timer);
                }
            }, 10);
            }
        });

}

module.exports = calc;