const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3003;


const eightball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/greeting/:name', (req,res)=>{
    res.send('how you doing today ' + req.params.name)
})


app.get('/tip/:total/:tipPercentage', (req,res)=>{
    res.send( req.params.tipPercentage) 
})


app.get('/magic/:question/:eightballs', (req,res)=>{
    res.send(req.params.question + '-----> '+ eightball[Math.floor(Math.random(req.params.eightballs)*20)+1])
})






app.listen(port,() => {
    console.log('I am listening on port' , port);
});