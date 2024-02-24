    var countDownDate = new Date("March 8, 2024 01:00:00").getTime();
    var countdownFunction = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        if (distance >= 0) {
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
        } else {
            clearInterval(countdownFunction);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
