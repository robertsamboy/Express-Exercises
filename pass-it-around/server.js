const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3003;



// i might have to include a for loop or a while, and add a template to include the anchor tags






app.get('/98', (req,res)=>{
    res.send('98 bottles of water on the wall')
})


app.get('/', (req,res)=>{
    res.send('99 bottles of water on the wall' + '<a href = http://localhost:3000/98> take one down, pass it around</a>')
})





app.listen(port,() => {
    console.log('I am listening on port' , port);
});