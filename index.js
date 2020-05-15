const express = require("express");

var app = express();
var port = process.env.PORT || 2222;

console.log("process.env.PORT = "+ process.env.PORT);

app.get("/data", (req,res) =>{
    var data = [{
        name: 'SOS',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'DATA',
        data: [249, 240, 297, 29851, 32490, 30282, 38121, 40434]
    }];
    res.send(data);
});

app.get("/geodata", (req,res) =>{
    var data = [
        ['Country', 'Popularity'],
        ['Spain', 1000],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
        ];
    res.send(data);
});

app.use("/",express.static("public"));

app.listen(port,()=>{
    console.log("Server ready at port "+port);
});
