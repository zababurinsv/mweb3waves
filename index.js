const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html', { root : __dirname});
});

let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(__dirname);
    console.log("Listening Port " + port);
});