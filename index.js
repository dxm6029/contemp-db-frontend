const { response } = require('express');
const fs = require('fs');


const express = require('express');
  
// Initialize App
const app = express();

app.engine('html', require('ejs').renderFile);

// Assign route
app.use('/', (req, res, next) => {
  res.sendFile(__dirname + "/index.html");
})
  
// Start server
app.listen(8000, () => {
  console.log('App listening on port 8000');
});