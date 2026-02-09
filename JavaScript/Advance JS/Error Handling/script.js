// Syntax Error - missing symbols, spelling mistakes etc
// Logical Error - implementing wrong logic
// Runtime Errors - error at project runtime

// Understanding Error Object ['Message', 'Name', 'Stack']

try {
  console.log(a.name.age);
} catch (err) {
  // error message
  console.error(err.message);
  // error name
  console.error(err.name);
  // complete error message
  console.error(err.stack);
}
