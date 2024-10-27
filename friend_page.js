window.onload = function() {
    var hr = 0;
    var min = 0;
    var sec = 5;

    function updateDisplay() {
        document.getElementById("timer").innerHTML = 
        (hr < 10 ? "0" + hr : hr) + ":" + 
        (min < 10 ? "0" + min : min) + ":" + 
        (sec < 10 ? "0" + sec : sec);
    }

    var timerInterval = setInterval(function() {
        sec--;

        if (sec < 0) {
            sec = 59;
            min--;

            if (min < 0) {
                min = 59;
                hr--;

                if (hr < 0) {
                    clearInterval(timerInterval);
                    document.getElementById("timer").innerHTML = "00:00:00";
                    alert("timer has run out!");
                    return;
                }
            }
            
        } 
        updateDisplay();
    }, 1000);

    document.getElementById("stopTimer").onclick = function() {
        clearInterval(timerInterval);
        var timeLeft = 
        (hr < 10 ? "0" + hr : hr) + ":" + 
        (min < 10 ? "0" + min : min) + ":" + 
        (sec < 10 ? "0" + sec : sec);
        alert("You finished the task " +timeLeft  + "before your friend");
        return;
    };
};