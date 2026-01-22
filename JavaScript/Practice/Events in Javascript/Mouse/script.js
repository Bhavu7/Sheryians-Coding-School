var image = document.querySelector("img");
var msg = document.querySelector("h3 #msg");
var box = document.getElementById("box");

image.addEventListener("mouseenter", function () {
  msg.innerHTML = "Entered on image.";
});

image.addEventListener("mouseleave", function () {
  msg.innerHTML = "Left from image.";
});

box.addEventListener("mousemove", function (ele) {
  msg.innerHTML = "Moving...";
  console.log(ele.x, " ", ele.y);
});
