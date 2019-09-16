const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'))

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://admin:456987@cluster0-erwsh.mongodb.net/pet?retryWrites=true&w=majority', 
{useNewUrlParser: true});

app.use(cors());

app.use((req, res, next) => {
    req.io = io;
  
    next();
});

app.use(
    '/file',
    express.static(path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
);

app.use(require('../routes/routes'));

app.listen(4545, () =>{
    console.log('conectado!')
});

