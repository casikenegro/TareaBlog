const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(express.static('public'));
app.use(cors({}));
app.use('/test',(req,res)=>{
    return res.send({
        message : "aaaa"        
    });
});
app.use('/', express.static(__dirname + '/public'));
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`app in progress localhost:${port}`);
});