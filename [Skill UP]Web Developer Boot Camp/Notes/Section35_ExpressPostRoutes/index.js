const express = require("express");
const app = express();

//source code is used to modift resykt
//tell express how to parse it
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/tacos', (req, res) => {
    res.send("Get tacos response");
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body; //search definityion of req.body
    res.send(`OK I RECEIVED: ${meat} ${qty}`);
})

app.listen(3000, () => {
    console.log("Listening on PORT 3000");
})