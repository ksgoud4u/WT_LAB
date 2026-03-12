const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());


const bookRouter = require('../route/bookRoute');


app.use('/books', bookRouter);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});