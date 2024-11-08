window.onload = function () {
  var minute = "00";
  var second = "00";
  var milli = "00";
  var appendMinute = document.getElementById("minute");
  var appendSecond = document.getElementById("second");
  var appendMilli = document.getElementById("milli");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 20);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    minute = "00";
    second = "00";
    milli = "00";
    appendMinute.innerHTML = "Minutes : " + minute;
    appendSecond.innerHTML = "Seconds : " + second;
    appendMilli.innerHTML = "Millisec : " + milli;
  };

  function startTimer() {
    milli++;

    if (milli <= 9) {
      appendMilli.innerHTML = "Millisec : 0" + milli;
    }
    if (milli > 9) {
      appendMilli.innerHTML = "Millisec : " + milli;
    }
    if (milli > 59) {
      second++;
      appendSecond.innerHTML = "Seconds : 0" + second;
      milli = 0;
      appendMilli.innerHTML = "Millisec : 0" + 0;
    }
    if (second > 9) {
      appendSecond.innerHTML = "Seconds : " + second;
    }
    if (second > 59) {
      minute++;
      appendMinute.innerHTML = "Minutes : 0" + minute;
      second = 0;
      appendSecond.innerHTML = "Seconds : 0" + 0;
    }
    if (minute > 9) {
      appendMinute.innerHTML = "Minutes : " + minute;
    }
    if (minute == 60) {
      clearInterval(Interval);
    }
  }
};
