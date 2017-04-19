//'use strict';


const express = require('express');
const app     = express();
const port    =   process.env.PORT || 3000;
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
app.get('/sample', function(req, res) {
  res.send('this is a sample!');
});


app.get('/test', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  //
  res.sendFile(__dirname + '/data.json');
});
// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
