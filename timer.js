
(() => {

    // функция таймера
    // Принимает время в минутах и элемент, который нужно заменить таймером
    function setTimer(time, timerElement) {

        let firstOperation = true;
        let minute = 59;
        let showMinute = '';
        let operatingTime = 0;

        if (firstOperation) {
            operatingTime = time;
        }

        let timer = setInterval(() => {
            minute -= 1;
            firstOperation = false;
            if (minute < 0) {
                operatingTime -= 1;
                minute = 59;
            }
            if (operatingTime < 0) {
                operatingTime = time;
                firstOperation = true;
            }
            if (String(minute).length == 1) {
                showMinute = '0' + minute;
            }
            else {
                showMinute = minute;
            }

            timerElement.textContent = operatingTime + ':' + showMinute;
        }, 1000);

    }

    document.addEventListener('DOMContentLoaded', function () {
        // Отрисовка таймера
        let timerElement = document.getElementById('timer');
        
        let halfHour = 29;

        setTimer(halfHour, timerElement);
    });


})();