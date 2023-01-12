startCounters();

function renderCountdowns() {
    const tripDate = new Date(2023, 4, 25, 5);
    const tripCountdown = getCountdown(tripDate);
    writeCountdownText(tripCountdown, '.trip-counter');

    const italiaDate = new Date(2023, 6, 28, 4);
    const italiaCountdown = getCountdown(italiaDate);
    writeCountdownText(italiaCountdown, '.italia-counter');

    const weddingDate = new Date(2023, 9, 12, 16, 30);
    const weddingCountdown = getCountdown(weddingDate);
    writeCountdownText(weddingCountdown, '.wedding-counter');

}

function getCountdown(awaitedDate) {
    // get today's time in ms:
    const date = new Date();
    const todaysTime = date.getTime();

    const awaitedTime = awaitedDate.getTime();

    const ms = awaitedTime - todaysTime;
    const days = Math.floor(ms / 86400000);
    const daysRemainder = ms - (days * 86400000);
    const hours = Math.floor(daysRemainder / 3600000);
    const hoursRemainder = daysRemainder - (hours * 3600000);
    const minutes = Math.floor(hoursRemainder / 60000);
    const minutesRemainder = hoursRemainder - (minutes * 60000);
    const seconds = Math.floor(minutesRemainder / 1000);

    return { 
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function writeCountdownText(countdown, selector) {
    const counter = document.querySelector(selector);

    const days = countdown.days;
    const hours = countdown.hours;
    const min = countdown.minutes;
    const sec = countdown.seconds;

    counter.textContent = `${days} days, ${hours} hours, ${min} minutes, & ${sec} seconds`;
}

function startCounters() {
    window.setInterval(renderCountdowns, 1000);
}