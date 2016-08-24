const express = require('express');
var app = express();
var port = 3000;


app.get('/', (request, response) => {
  response.json({message: "Hello From express!"});
});

app.get('/page2', (request, response) => {
  response.json({message: "Hello from page number 2!!!!!!!!!!!!!!!!"});
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
