const express = require("express");
const bodyParser = require('body-parser');
const Robot = require('./src/xspeedit/Xspeedit')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log("Server init on port 3000");
});

app.post('/processItems', function (req, res) {
    const itemsString = req.body.items_string
    if (!itemsString){
        res.send('No items sent');
        return
    }

    const robot = new Robot(itemsString)
    const boxString = robot.getBoxString()
    const boxCount = robot.getBoxCount()

    res.send({
        boxedItems: boxString,
        boxCount: boxCount    });
});