const express = require("express");

const app = express();

app.get("/data", (req, res) => {
  const dummyData = [
    {
      username: "Bhavesh",
      city: "Anand",
      age: 21,
    },
  ];
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173').json({ data: dummyData });
});

app.listen(8000, () => {
  console.log("Server is running at PORT - 8000");
});
