"use strict";
const btns = document.querySelector(".btn1");
btns.addEventListener("mouseover", function () {
  btns.style.backgroundColor = "hsl(25, 97%, 53%)";
  btns.addEventListener("mouseout", function () {
    btns.style.backgroundColor = "hsl(213, 19%, 18%)";
  });
});

/*const btn2 = document.querySelector(".btn2");
btn2.addEventListener("mouseover", function () {
  btn2.style.backgroundColor = "hsl(25, 97%, 53%)";
  btn2.addEventListener("mouseout", function () {
    btn2.style.backgroundColor = "hsl(213, 19%, 18%)";
  });
});

const btn3 = document.querySelector(".btn3");
btn3.addEventListener("mouseover", function () {
  btn3.style.backgroundColor = "hsl(25, 97%, 53%)";
  btn3.addEventListener("mouseout", function () {
    btn3.style.backgroundColor = "hsl(213, 19%, 18%)";
  });
});

const btn4 = document.querySelector(".btn4");
btn4.addEventListener("mouseover", function () {
  btn4.style.backgroundColor = "hsl(25, 97%, 53%)";
  btn4.addEventListener("mouseout", function () {
    btn4.style.backgroundColor = "hsl(213, 19%, 18%)";
  });
});

const btn5 = document.querySelector(".btn5");
btn5.addEventListener("mouseover", function () {
  btn5.style.backgroundColor = "hsl(25, 97%, 53%)";
  btn5.addEventListener("mouseout", function () {
    btn5.style.backgroundColor = "hsl(213, 19%, 18%)";
  });
});
*/

const submit = document.querySelector(".submit");
submit.addEventListener("mouseover", function () {
  submit.style.backgroundColor = "hsl(217, 12%, 63%)";
  submit.addEventListener("mouseout", function () {
    submit.style.backgroundColor = "hsl(25, 97%, 53%)";
  });
});
