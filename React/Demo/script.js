let ele = React.createElement("h1", null, "Hello, From React!");

let container = document.querySelector(".container");

let root = ReactDOM.createRoot(container);

root.render(ele);
