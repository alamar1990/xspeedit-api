const express = require("express");
const bodyParser = require('body-parser');
const Robot = require('./src/xspeedit/Xspeedit')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log("Server init on port 3000");
});

app.get('/', (req, res) => {
    res.send('Please POST to /processItems to process Items \n' +
        'using this example parameters \n' +
        '{\n' +
        '    "items_string" : "94861616"\n' +
        '}');
});

app.post('/processItems', (req, res) => {
    const itemsString = req.body.items_string
    if (!itemsString){
        res.send('No items sent');
        return
    }
    if (typeof itemsString === 'number'){
        res.send('Numbers are not accepted');
        return
    }

    const robot = new Robot(itemsString)
    const boxString = robot.getBoxString()
    const boxCount = robot.getBoxCount()

    res.send({
        boxedItems: boxString,
        boxCount: boxCount    });
});