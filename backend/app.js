require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const chalk = require('chalk');
const routes = require('./routes');

const port = 3001;
const app = express();

app.use(cookieParser());
app.use(express.json());

app.use('/', routes); // TODO после поменять на /api

mongoose.connect(process.env.MONGODB_URI).then(() => {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
        console.log(chalk.green(`Server is running on port ${port}`));
    });
});
