const $ = {
  hr: document.querySelector("#hr"),
  min: document.querySelector("#min"),
  sec: document.querySelector("#sec"),
  start: document.querySelector("#start"),
  stop: document.querySelector("#stop"),
  reset: document.querySelector("#reset"),
};

const T = {
  int: [],
  hr: 0,
  min: 0,
  sec: 0,
};

const funcs = {
  start: function () {
    var x = setInterval(function () {
      if (T.sec == 59) {
        if (T.min == 59) {
          T.min = 0;
          T.hr++;
          $.hr.innerHTML = T.hr < 10 ? "0" + T.hr : T.hr;
        }
        T.sec = 0;
        T.min++;
        $.min.innerHTML = T.min < 10 ? "0" + T.min : T.min;
      }
      T.sec++;
      $.sec.innerHTML = T.sec < 10 ? "0" + T.sec : T.sec;
    }, 1000);
    T.int.push(x)
    // $.start.removeEventListener("click", funcs.start);
    // $.start.disabled = true
    $.stop.addEventListener("click", funcs.stop);
   
  },
  stop: function () {
    clearInterval(T.int.pop());
    $.start.disabled = false;
    $.reset.addEventListener("click", funcs.reset);
    $.start.addEventListener("click", funcs.start);
  },
  reset: function () {
    T.hr = 0;
    T.min = 0;
    T.sec = 0;
    $.hr.innerHTML = "00";
    $.min.innerHTML = "00";
    $.sec.innerHTML = "00";
    $.start.addEventListener("click", funcs.start);
  },
};

$.start.addEventListener("click", funcs.start);
