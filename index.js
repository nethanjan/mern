const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there'});
});
console.log('test');
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log('App is listening to http://localhost:5000')});
