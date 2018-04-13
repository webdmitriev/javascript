window.addEventListener("DOMContentLoaded", () => {
   
   let tab = document.getElementsByClassName("info-header-tab"),
       tabContent = document.getElementsByClassName("info-tabcontent"),
       info = document.getElementsByClassName("info-header")[0],
       more = document.querySelector(".more"),
       overlay = document.querySelector(".overlay"),
       close = document.querySelector(".popup-close")
   
   function hideTabContent(a) {
      for (let i = a; i < tabContent.length; i++) {
         tabContent[i].classList.remove("show")
         tabContent[i].classList.add("hide")
      }
   }   
   
   hideTabContent(1)
   
   function showTabContent(b) {
      if (tabContent[b].classList.contains("hide")) {
         hideTabContent(0)
         tabContent[b].classList.remove("hide")
         tabContent[b].classList.add("show")
      }
   }
   
   info.addEventListener("click", (event) => {
      let target = event.target
      if (target.className == "info-header-tab") {
         for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
               showTabContent(i)
               break
            }
         }
      }
   })
   
   /* Timer */

   let  deadline = "2018-04-30"
   
   function getTimeRemaining(endtime) {
      let   t = Date.parse(endtime) - Date.parse(new Date()),
            seconds, minutes, hours
            
            if (t <= 0) {
               seconds = minutes = hours = 0
            }  else {
                  seconds = Math.floor(t / 1000 % 60),
                  minutes = Math.floor(t / 1000 / 60 % 60),
                  hours = Math.floor(t / (1000 * 60 * 60))
            }
            
      return {
         "total": t,
         "hours": hours,
         "minutes": minutes,
         "seconds": seconds
      }
   }
   
   function setClock(id, endtime) {
      let   timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds")
            
      function updateClock() {
         let t = getTimeRemaining(endtime)
         // добавил постановку нулей при значениях меньше 10
         if (t.hours < 10) {
            hours.innerHTML = "0" + t.hours
         }  else {
               hours.innerHTML = t.hours
            }
         if (t.minutes < 10) {
            minutes.innerHTML = "0" + t.minutes
         }  else {
               minutes.innerHTML = t.minutes
            }
         if (t.seconds < 10) {
            seconds.innerHTML = "0" + t.seconds
         }  else {
               seconds.innerHTML = t.seconds
            }
            
         if (t.total <= 0) {
            clearInterval(timeInterval)
         }
      }
      
      updateClock()
      let timeInterval = setInterval(updateClock, 1000)
   }
   
   setClock("timer", deadline)
   
   /* Soft Scroll */

   function animate(options) {
      let start = performance.now()
      requestAnimationFrame(function animate(time) {
         let timeFraction = (time - start) / options.duration
         if (timeFraction > 1) timeFraction = 1
         let progress = options.timing(timeFraction)
         options.draw(progress)
         if (timeFraction < 1) {
             requestAnimationFrame(animate)
         }   
      })
   }

   function circ(timeFraction) {
     return 1 - Math.sin(Math.acos(timeFraction))
   }

   function makeEaseOut(timing) {
     return function(timeFraction) {
         return 1 - timing(1 - timeFraction)
     }
   }

   let  circEaseOut = makeEaseOut(circ),
      menu = document.querySelector("nav ul") 
          
   menu.addEventListener("click", function(e) {
     let li = e.target.closest("li")
     e.preventDefault()
         if (li) {
             let myTime = 1000
             let elem = document.querySelector(e.target.getAttribute("href"))
             animate({ 
                 duration: myTime,
                 timing: circEaseOut,
                 draw: function(progress) {
                     window.scrollBy(0, (progress * 
                     (elem.getBoundingClientRect().top - menu.offsetHeight)))
                 }
             })
         }
   })
   
   /* Modal Window */
  
  more.addEventListener("click", function() {
     this.classList.add("more-splash")
     overlay.style.display = "block"
     document.body.style.overflow = "hidden"
  })
  close.addEventListener("click", function() {
     overlay.style.display = "none"
     more.classList.remove("more-splash")
     document.body.style.overflow = ""
  })
  
  function showDelegationModal() {
     let parent = document.getElementsByClassName("info")[0]
     parent.addEventListener("click", (event) => {
        let target = event.target
        if (target.matches(".description-btn")) {
           target.classList.add("more-splash")
           overlay.style.display = "block"
           document.body.style.overflow = "hidden"
        }
     })
  }
  
  window.addEventListener("load", function() {
    showDelegationModal()
  })
  
  /* Form */
  
  let message = {
     loading: "Загрузка...",
     success: "Спасибо! Скоро мы с вами свяжемся.",
     failure: "Что-то пошло не так..."
  }
  
   let form = document.getElementsByClassName("main-form")[0],
       contact_form = document.getElementById("form"), // Контактная форма
       input = form.getElementsByTagName("input"),
       statusMessage = document.createElement("div")
      
   statusMessage.classList.add("status")
   statusMessage.style.marginTop = "10px"
   
   function makeRequest(innerForm) { // Функция для отправки формы
      innerForm.addEventListener("submit", function(event) {
         event.preventDefault()
         innerForm.appendChild(statusMessage)
         
         // AJAX
         
         let request = new XMLHttpRequest(),
             formData = new FormData(innerForm)
             
         request.open("POST", "server.php")
         request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
         request.send(formData)
         request.onreadystatechange = function() {
            if (request.readyState < 4) {
               statusMessage.innerHTML = message.loading
            }  else if (request.readyState === 4) {
                  if (request.status == 200 && request.status < 300) {
                     statusMessage.innerHTML = message.success
                     // Добавляем контент на страницу
                  }
                  else {
                     statusMessage.innerHTML = message.failure
                  }
               }
            for (let i = 0; i < input.length; i++) {
               input[i].value = ""
               // Очищаем поля ввода
            }
         }
      })
   }
   
   makeRequest(form)
   makeRequest(contact_form)   
   
   /* Slider */
   
   let slideIndex = 1,
       slides = document.getElementsByClassName("slider-item"),
       prev = document.querySelector(".prev"),
       next = document.querySelector(".next"),
       dotsWrap = document.querySelector(".slider-dots"),
       dots = document.getElementsByClassName("dot")
   
   showSlides(slideIndex)
       
   function showSlides(n) {
      if (n > slides.length) {
         slideIndex = 1
      }
      if (n < 1) {
         slideIndex = slides.length
      }
      
      for (let i = 0; i < slides.length; i++) {
         slides[i].style.display = "none"
      }
      
      for (let i = 0; i < dots.length; i++) {
         dots[i].classList.remove("dot-active")
      }
      
      slides[slideIndex - 1].style.display = "block"
      dots[slideIndex - 1].classList.add("dot-active")
   }
   
   function plusSlides (n) {
      showSlides(slideIndex += n)
   }
   
   function currentSlide(n) {
      showSlides(slideIndex = n)
   }
   
   prev.addEventListener("click", function() {
      plusSlides(-1)
   })
   
   next.addEventListener("click", function() {
      plusSlides(1)
   })
   
   dotsWrap.addEventListener("click", function(event) {
      let t = event.target
      for (let i = 0; i <= dots.length; i++) {
         if (t.classList.contains("dot") && t == dots[i-1]) {
            currentSlide(i)
         }
      }
   })
   
   /* Calculator */
   
   function isInteger(num) {
      num = Number(num)
      return (num ^ 0) === num
   }
   
   let people = document.getElementsByClassName("counter-block-input")[0],
       restDays = document.getElementsByClassName("counter-block-input")[1],
       place = document.getElementById("select"),
       totalValue = document.getElementById("total"),
       peopleSum = +people.value,
       daysSum = +restDays.value,
       total = 0,
       index = place.options[place.selectedIndex].value
       
       totalValue.innerHTML = 0
       
       people.addEventListener("change", function() {
          peopleSum = +this.value
          total = (daysSum + peopleSum) * 4000
          if (
             (restDays.value == "" || people.value == "") || 
             (restDays.value < 1 || people.value < 1)     ||
             (!(isInteger(restDays.value)) || !(isInteger(people.value)))
             ) 
          {
             totalValue.innerHTML = 0
          } else {
             totalValue.innerHTML = total * index
          }
       })
       
       restDays.addEventListener("change", function() {
          daysSum = +this.value
          total = (daysSum + peopleSum) * 4000
          if (
             (restDays.value == "" || people.value == "") || 
             (restDays.value < 1 || people.value < 1)     ||
             (!(isInteger(restDays.value)) || !(isInteger(people.value)))
             ) 
          {
             totalValue.innerHTML = 0
          } else {
             totalValue.innerHTML = total * index
          }
       })
       
       place.addEventListener("change", function() {
          total = (daysSum + peopleSum) * 4000
          if (
             (restDays.value == "" || people.value == "") || 
             (restDays.value < 1 || people.value < 1)     ||
             (!(isInteger(restDays.value)) || !(isInteger(people.value)))
             ) 
          {
               totalValue.innerHTML = 0
          } else {
             index = place.options[place.selectedIndex].value
             totalValue.innerHTML = total * index
          }
       })
       
})