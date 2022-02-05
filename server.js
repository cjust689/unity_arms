// server.js
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
const port = process.env.PORT || 5000;
const hostname = '127.0.0.1';


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});