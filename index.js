const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', function(req, res) {
    const johnKidneys = users[0].Kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;

    for (let i=0; i < johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post('/', function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].Kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})



app.put('/', function(req, res){
    if(isUnhealthyKidneys()){
        for (let i=0; i<users[0].Kidneys.length; i++){
            users[0].Kidneys[i].healthy = true;
        }
        res.json({msg: "Kidneys Replaced"});
    }
    else{
        res.status(411).json({msg: "No Unhealthy kidneys left!"})
    }
})

app.delete('/', function(req, res){
    if(isUnhealthyKidneys()){
        const newKidneys = [];
        for (let i=0; i < users[0].Kidneys.length; i++){
            if(users[0].Kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].Kidneys = newKidneys;
        res.json({msg: "filtered kidneys!"})
    }
    else{
        res.status(411).json({
            msg: "You have no bad kindeys"
        });
    }
})

function isUnhealthyKidneys(){
    let atLeastOneUnhealthyKidney = false;
    for (let i=0; i < users[0].Kidneys.length; i++){
        if(!users[0].Kidneys[i].healthy){
            atLeastOneUnhealthyKidney = true;
        }
    }
    return atLeastOneUnhealthyKidney
}

app.listen(port)

//Users Stored (In an array)
var users = [{
    name: "John",
    Kidneys: [{
        healthy: false
    }]
}];