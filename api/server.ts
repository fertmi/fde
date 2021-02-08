var axios = require('axios');
var express = require('express');
var path = require('path');
const fs = require('fs');

var app = express();

var cors = require('cors');
app.use(cors());

const wwwroot = path.join(path.resolve(), 'public');

/**
 * Configure the routes
 */
[
 "/ru/", "/ru/*",
 "/en/", "/en/*",
 "/"
].forEach((route) => app.use(route, express.static(wwwroot)));

app.use('/storage', express.static('../../fde-storage'));

/**
 * Configure the api
 */
app.get('/api/*', function (req, res) {
    console.log(`GET ${(new Date()).toISOString()} ${req.path}`);
    const path = req.path.replace("/api", "");

    axios.request({
        url: `https://raw.githubusercontent.com/Max1992/fde-storage/master/${path}`,
        method: "GET"
    }).then(response => {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');

        if (req.headers.accept.indexOf('text/css') >= 0) {
            res.header('Content-Type', 'text/css');
        }

        res.send(response.data)
    }).catch(error => {
        res.send(error);
        console.log(`error: ${error}`);
    });
});


var server = app.listen(80, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(`Example app listening at http://${host}:${port}`);
 })
