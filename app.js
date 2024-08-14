
const body = document.querySelector(".body");

const colors = ["red", "blue", "purple", "yellowgreen", "orange"];
let colorIndex  = 0;

setInterval(() => {
  body.style.background = colors[colorIndex];
  colorIndex = (colorIndex + 1)% colors.length;
}, 5000);