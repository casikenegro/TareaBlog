const express = require('express');
const app = express();
//add the router
app.use(express.static('public'));
require('dotenv').config();

app.use('/', express.static(__dirname + '/public'));

app.listen(process.env.PORT || 5000);