
const express = require('express');
const app = express();
const port = 3000;


function calculatesum(counter){
    var sum= 0;
    for (var i=0; i<counter;i++){
        sum+=i;
    }
    return sum;

}

app.get('/handlesum',(req,res)=>{
    var counter = req.query.counter;
    var calcualtedsum = calculatesum(counter);
    var answer   = `The sum is ${calcualtedsum}`;
    res.send(answer);
})

app.get('/',(req,res)=>{
    res.send("<h1>A Backend Created By Deepanshu</h1>")
})
function started(){
    console.log(`Example App Running on ${port}`)
}


app.listen(port,started);



