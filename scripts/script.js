'use scrict';

function showDate(date) {
    let body = document.querySelector('body'),
        hours = date.getHours(),
        day = date.getDay() -1,
        daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
        time = getZeroforDate(date.toLocaleTimeString());
                  
        function getZeroforDate(number) {
            if(number > 0 && number < 10) {
                return "0" + number;
            }
            else {
                return number;
            }
        };

        function getTimeRemaining(delay) {
            let newYearDate = new Date(delay).getTime()
                dateNow = new Date().getTime(),
        
                timeRemaining = getZeroforDate((newYearDate - dateNow) / 1000),
                dayForRest = getZeroforDate(Math.floor(timeRemaining /60 / 60 / 24));
            
            return { dayForRest };   
        }
        
        let timer = getTimeRemaining('1 january 2020');
       
        if(hours >= 0 && hours <= 3 ) {
            let bodyText = `<div>
            <p>Добрoй ночи</p>
            <p>Сегодня: ${daysOfWeek[day]}</p>
            <p>Сегодня: Текущее время ${time} AM</p>
            <p>Сегодня: До нового года осталось ${timer.dayForRest}</p>
            </div>`;

            body.innerHTML = bodyText;
        }
        else if(hours >= 4 && hours <= 11 ) {
            let bodyText = `<div>
            <p>Добрoе утро</p>
            <p>Сегодня: ${daysOfWeek[day]}</p>
            <p>Сегодня: Текущее время ${time} AM</p>
            <p>Сегодня: До нового года осталось ${timer.dayForRest}</p>
            </div>`;

            body.innerHTML = bodyText;
        }
        else if(hours >= 12 && hours <= 16 ) {
            let bodyText = `<div>
                <p>Добрый день</p>
                <p>Сегодня: ${daysOfWeek[day]}</p>
                <p>Сегодня: Текущее время ${time} PM</p>
                <p>Сегодня: До нового года осталось ${timer.dayForRest}</p>
                </div>`;

                body.innerHTML = bodyText;
        }
        if(hours >= 17 && hours <= 23 ) {
            let bodyText = `<div>
                <p>Добрый вечер</p>
                <p>Сегодня: ${daysOfWeek[day]}</p>
                <p>Сегодня: Текущее время ${time} PM</p>
                <p>Сегодня: До нового года осталось ${timer.dayForRest}</p>
                </div>`;

                body.innerHTML = bodyText;
        }
}

showDate(new Date());













       




 

  

