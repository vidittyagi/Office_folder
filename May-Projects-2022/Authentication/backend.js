const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:flase}));


mongoose.connect('mongodb://localhost:27017/myapp');

const connection = mongoose.connection;








