const bodyParser = require('body-parser');
const express = require('express');

const app =express();
const port =6428;
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/bmi.html')
})

app.post('/',(req,res)=>{
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);  
    var bmi = (weight*703)/(height*height);
    res.send('your bmi is:'+bmi)
})

app.listen(port,()=>{
    console.log('listening on port 6428');
})