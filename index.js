const express = require('express');
  
// Initialize App
const app = express();
const path = require('path');

app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname)));

// Assign route
app.use('/', (req, res, next) => {
  res.send(__dirname + "/index.html");
})
  
// Start server
app.listen(8000, () => {
  console.log('App listening on port 8000');
});