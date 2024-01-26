const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/',()=>{
    res.send('Hello dattuda and virushali');
})

app.listen(port,()=>{
    console.log(`App ${port} vr gani aikt ahe`);
})
