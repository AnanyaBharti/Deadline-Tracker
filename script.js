const endDate = new Date("3 feb, 2025 1:33:00").getTime();
const startDate = new Date().getTime();


let x = setInterval(function updateTimer() {
    const currDate = new Date().getTime();
    const distCovered = currDate - startDate;
    const distPending = endDate - currDate;

    //calculate days, mins, hrs,secs
    //1 day = 24*60*60*1000 ms

    const oneDayInMillis = (24 * 60 * 60 * 1000);
    const oneHourInMillis = (60 * 60 * 1000);
    const oneMinInMillis = (60 * 1000);
    const oneSecondInMillis = (1000);

    const days = Math.floor(distPending / (oneDayInMillis));
    const hrs = Math.floor((distPending % (oneDayInMillis)) / (oneHourInMillis));
    const mins = Math.floor((distPending % (oneHourInMillis)) / (oneMinInMillis));
    const secs = Math.floor((distPending % (oneMinInMillis)) / (oneSecondInMillis));

    // populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    //calculate width percentage for progress bar

    const totalDistance = endDate - startDate;

    const percentageDistance = (distCovered / totalDistance) * 100;

    //set width for progress bar

    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if (distPending < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";
    }


}
    , 1000);