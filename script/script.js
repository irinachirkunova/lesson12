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

    countTimer('23 july 2019');
    //setInterval(countTimer, 1000, '21 july 2019');
 
})