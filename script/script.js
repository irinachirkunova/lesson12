window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //Timer
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

        function getZeroforDate(number) {
            if(number >= 0 && number < 10) {
                return "0" + number;
            }
            else {
                return number;
            }
        }

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
     
            timeRemaining = getZeroforDate((dateStop - dateNow) / 1000),
            seconds = getZeroforDate(Math.floor(timeRemaining % 60)),
            minutes = getZeroforDate(Math.floor((timeRemaining / 60) % 60)),
            hours = getZeroforDate(Math.floor(timeRemaining /60 / 60));
            
            return { timeRemaining, hours, minutes, seconds};   

        }


        function updateClock() {
            let timer = getTimeRemaining();
       
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if(timer.timeRemaining > 0) {
                //setTimeout(updateClock, 1000);
                setInterval(updateClock, 1000);
            }
            else{
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
           
        }
    
        updateClock();
    }

    countTimer('20 july 2019');
    //setInterval(countTimer, 1000, '21 july 2019');

    //menu
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
              menu = document.querySelector('menu'),
              closeBtn = document.querySelector('.close-btn'),
              menuItems = menu.querySelectorAll('ul>li');

        /*const handlerMenu = () => {
            if(!menu.style.transform ||  menu.style.transform === `translate(-100%)`) {
                menu.style.transform = `translate(0)`;
            }
            else {
                menu.style.transform = `translate(-100%)`;
            }     
        }*/

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        }

        btnMenu.addEventListener('click', handlerMenu);

        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach((elem)=> {
            elem.addEventListener('click', handlerMenu);
        })
    };

    toggleMenu();
 

    //popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close'),
        popupContent = document.querySelector('.popup-content');

        popupBtn.forEach((elem)=> {
            elem.addEventListener('click', () => { 
               
            if(screen.width > 768){
                popup.style.display = 'block';

                var start = Date.now();
                var stop = setInterval(function() {
                  
                    var timePassed = Date.now() - start;
                  
                    if (timePassed >= 1800) {
                      clearInterval(stop); 
                      return;
                    }
                  
                    draw(timePassed);
                  
                  }, 20);
                
                  function draw(timePassed) {
                    popupContent.style.left = timePassed / 3 + 'px';
                  }
                }

                else {
                    popup.style.display = 'block';
                }


        
            });
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
            });
    }

    togglePopUp();
})