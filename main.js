const express = require('express');
const { appendFile } = require('fs');

const app = express();

app.get('/',function(req,res){
    res.send("Working");
    console.log("Hiii");
})

app.listen(9000);