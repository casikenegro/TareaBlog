const express = require('express');
const app = express();
//add the router
app.use(express.static('public'));

app.use('/', express.static(__dirname + '/public'));

app.listen(3000);