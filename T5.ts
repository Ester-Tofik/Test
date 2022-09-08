

const bodyParser = require("body-parser");
const express = require('express');
const app = express();


app.use(bodyParser.json
    ({
        verify:
            function (req, res, buf) { req.rawBody = buf }
    }))

//if i want to use it
app.post('/server', function (req, res) {
    const retrievedSignature = req.get("X-header-Integrity")
    //send this body string for validation with secret
    const bodyString = Buffer.from(req.rawBody, 'utf8')
    //Sending it to the function for testing later... look like this
    //const check = Check(retrievedSignature, bodyString, "secret")
});



