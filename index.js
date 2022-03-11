const express = require("express");
require("./Desktop/mongodb-data");
const Pet = require("./models/pets");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json()); 
app.listen(port, () => {
    console.log("You're connected to port ${port}");
});

app.post("/pets", (req, res) =>{
    pet 
    .save()
    .then(() =>{
        res.send(pet);
    })

    .catch((e) => {
        res.status(400).send(e);
    });


})