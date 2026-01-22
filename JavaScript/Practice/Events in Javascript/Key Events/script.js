let keys = document.querySelector("h1");
let body = document.body;

body.addEventListener("keydown", function (props) {
  keys.innerHTML = props.code;
});
