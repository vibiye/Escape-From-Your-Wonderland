window.onload = function() {
    var hr = 0;
    var min = Math.floor(Math.random() * 4);
    var sec = Math.floor(Math.random() * 61);

    function updateDisplay() {
        const newTime = 
            (hr < 10 ? "0" + hr : hr) + ':' + 
            (min < 10 ? "0" + min : min) + ':' + 
            (sec < 10 ? "0" + sec : sec);

        const myDiv = document.querySelector(".display-timer");
        myDiv.textContent = newTime;
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
                    document.querySelector(".display-timer").textContent ="00:00:00";
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
        alert("You finished the task " + timeLeft  + "before your friend");
        return;
    };

    updateDisplay();
};