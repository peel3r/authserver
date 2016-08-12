const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router')
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
//db

mongoose.connect('mongodb://localhost:auth/auth');

//app

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));
router(app);

//server
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on', port);