function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

let search = document.querySelector("#search").addEventListener(
  "input",
  debounce(function () {
    console.log("Started!!!");
  }, 400),
);
