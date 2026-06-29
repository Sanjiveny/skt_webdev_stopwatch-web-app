let timer = false;
let hour = 0, minute = 0, second = 0, count = 0;

document.getElementById('start').addEventListener('click', function () {
    timer = true;
    stopWatch();
});

document.getElementById('stop').addEventListener('click', function () {
    timer = false;
});

document.getElementById('reset').addEventListener('click', function () {
    timer = false;
    hour = minute = second = count = 0;
    updateDisplay();
});

function stopWatch() {
    if (timer) {
        count++;
        if (count === 100) {
            second++;
            count = 0;
        }
        if (second === 60) {
            minute++;
            second = 0;
        }
        if (minute === 60) {
            hour++;
            minute = 0;
        }
        updateDisplay();
        setTimeout(stopWatch, 10);
    }
}

function updateDisplay() {
    document.getElementById('hour').innerHTML = formatTime(hour);
    document.getElementById('minute').innerHTML = formatTime(minute);
    document.getElementById('second').innerHTML = formatTime(second);
    document.getElementById('count').innerHTML = formatTime(count);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
