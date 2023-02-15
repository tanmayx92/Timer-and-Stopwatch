var hrs = 0;
var min = 0;
var time = 0;
var countdown = document.getElementById("hrs");


var value1 = 10;

function get() {
    hrs = document.getElementById("hrs_user").value;
    min = document.getElementById("min_user").value;
    time = (hrs * 60 * 60) + (min * 60);   //total time in seconds.

}


function start_timer() {
    get();
    timer_status = true;
    document.getElementById("button-start").disabled = true;
    document.getElementById("hrs_user").disabled = true;
    document.getElementById("min_user").disabled = true;
    timer();

}
function Stop_timer() {
    timer_status = false;
    document.getElementById("button-start").disabled = false;
    document.getElementById("hrs_user").disabled = false;
    document.getElementById("min_user").disabled = false;
}


function timer() {

    if (timer_status == true) {

        hrs = Math.floor(time / 3600);
        min = Math.floor(time / 60) % 60;
        var second = time % 60;

        if (hrs < 10) {
            hrs = "0" + hrs;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (second < 10) {
            second = "0" + second;
        }

        if (hrs == 0 && min == 0 && second == 0) {
            document.getElementById("instructions").innerHTML = "CounDown Over.";
            Stop_timer();
            
        }
        countdown.innerHTML = `${hrs}:${min}:${second}`;
        time--;
        setTimeout(timer, 1000);
    }
}


