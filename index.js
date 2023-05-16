// index.js

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  if (process.env.NODE_ENV !== "test") {
    console.log(`App listening on port ${port}`);
  }
});

// Add this function to close the server connection
const closeServer = () => {
  server.close();
};

module.exports = { app, closeServer };
