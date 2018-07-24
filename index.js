const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');


app.use('/static', express.static(__dirname + '/server/build/static'));

app.get('/companytype', (request, response) => {
    axios.get(`http://kredit.likvido.dk/api/companytypeahead?query=${request.headers.value ? request.headers.value : 'youf'}`, {headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
        },})
        .then((res) => {
            response.json(res.data)
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.get('/company', (request, response) => {
    axios.get(`http://api.likvido.dk/api/company?query=${request.headers.value}`, {headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
        },})
        .then((res) => {
            response.json(res.data)
        })
        .catch(function (error) {
        });
});


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
});
// app.get('/', (req, res) => {
//     res.send('HIHIHIHIHIHIHIHIH')
// });



const port = process.env.PORT || 1337;

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

console.log("Server running at http://localhost:%d", port);
