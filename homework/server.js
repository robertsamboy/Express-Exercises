const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3003;


app.get('/greeting/:name', (req,res)=>{
    res.send('how you doing today ' + req.params.name)
})


app.get('/tip/:total/:tipPercentage', (req,res)=>{
    res.send( req.params.tipPercentage) 
})








app.listen(port,() => {
    console.log('I am listening on port' , port);
});