function renderCountdowns() {

    const tripDate = new Date(2023, 4, 25);

    const italiaDate = new Date()

    const weddingDate = new Date(2023, 9, 12);

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

    return [days, hours, minutes, seconds];
}

renderCountdowns();