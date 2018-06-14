function attachEventsListeners() {
    let daysButton = document.getElementById('daysBtn');
    let hoursButton = document.getElementById('hoursBtn');
    let minutesButton = document.getElementById('minutesBtn');
    let secondsButton = document.getElementById('secondsBtn');

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');


    daysButton.addEventListener('click', convertDays);
    hoursButton.addEventListener('click', convertHours);
    minutesButton.addEventListener('click', convertMinutes);
    secondsButton.addEventListener('click', convertSeconds);

    function convertDays() {
        let days = Number(daysInput.value);
        hoursInput.value = days * 24;
        minutesInput.value = days * 1440;
        secondsInput.value = days * 86400;

    }

    function convertHours() {
        let hours = Number(hoursInput.value);
        daysInput.value = hours * 0.0416666667;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 3600;
    }

    function convertMinutes() {
        let minutes = Number(minutesInput.value);
        daysInput.value = minutes * 0.000694444444;
        hoursInput.value = minutes * 0.0166666667;
        secondsInput.value = minutes * 60;
    }

    function convertSeconds() {
        let seconds = Number(secondsInput.value);
        daysInput.value = seconds / 86400;
        hoursInput.value = seconds * 0.000277777778;
        minutesInput.value = seconds * 0.0166666667;
    }
}