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

    //menu
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
              menu = document.querySelector('menu');
              //menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        }

        btnMenu.addEventListener('click', handlerMenu);

        menu.addEventListener('click', (event) => {
            let target = event.target;
                
            if(target.classList.contains('close-btn')) {
                handlerMenu();
            }
            else {
                target = target.classList.contains('ul');
                handlerMenu();       
            }            
        });

        document.body.addEventListener('click',()=>{
            let target = event.target;
        
            target = target.closest('.menu');
                if(!target){
                    menu.classList.remove('active-menu');
                } 
        });
    };

    toggleMenu();
 

    //popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn');

        popupBtn.forEach((elem)=> {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';

            });
        });

        popup.addEventListener('click', (event) => {
            let target = event.target;

            if(target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            }
            else {
                target = target.closest('.popup-content');

                if(!target) {
                    popup.style.display = 'none';
                }
            }
                
        })
    }

    togglePopUp();

    //табы
    
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
              tab = tabHeader.querySelectorAll('.service-header-tab'),
              tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++) {
                if(index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                }
                else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }

            }

        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.service-header-tab');


            if(target) {
                tab.forEach((item,i) => {
                    if(item === target) {
                        toggleTabContent(i);
                    }
                });
                
            }
            
        });

    };

    tabs();
})