// Promise - default state is pending

const pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

pro
  .then(function () {
    console.log("Resolved!!!");
  })
  .catch(function () {
    console.log("Rejected!!!");
  });
