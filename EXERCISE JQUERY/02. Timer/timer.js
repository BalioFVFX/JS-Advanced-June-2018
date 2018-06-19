function timer() {
    let startButton = $('#start-timer');
    let stopButton = $('#stop-timer');
    let hoursSpan = $('#hours');
    let minutesSpan = $('#minutes');
    let secondsSpan = $('#seconds');
    let hours = 0;
    let minutes = 0;
    let seconds = 0;


    let interval;

    startButton.on('click', function () {
        clearInterval(interval);
        interval = setInterval(function () {
            increment();
        }, 1000);
    });

    stopButton.on('click', function () {
        clearInterval(interval);
    });

    function increment() {
        seconds++;

        if (seconds > 59) {
            seconds = 0;
            minutes += 1;
        }
        if (minutes > 59) {
            minutes = 0;
            hours += 1;
        }

        $(hoursSpan).text(('0' + hours).slice(-2));
        $(minutesSpan).text(('0' + minutes).slice(-2));
        $(secondsSpan).text(('0' + seconds).slice(-2));
    }
}