
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
    res.send("<h2>Go To /handlesum Route To Calculate the sum of numbers from 1 to given number</h2>")
    res.send("<h3>/handlesum?counter=yournumber to find the sum from 1 to your number </h3>")
})
function started(){
    console.log(`Example App Running on ${port}`)
}


app.listen(port,started);



