const express = require('express');
const path = require('path');

const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/path-test', (req, res) => {
    // res.send(__dirname);
    res.sendFile(path.join(__dirname, 'views', 'nice.html'));
    //console.log(hi);
});

app.get('/testing', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'testing-get.html'));
});

app.post('/testing', (req, res) => {
    const { username, password } = req.body;
    res.send(`Your Username is ${ username }`);
});

app.get('/sample-get', (req, res) => {
    res.send(req.query);
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
