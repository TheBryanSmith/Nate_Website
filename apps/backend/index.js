const express = require("express");
const app = express("");
const PORT = 3000;


//Basic route 
app.get("/", (req, res) => {
  res.send("Hello from my Node.js + Express server!");
});


//Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

