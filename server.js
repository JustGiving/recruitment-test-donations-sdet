const express = require('express');
const { resolve } = require('path');

const root = __dirname;

const app = express();

app.use(express.static(resolve(root, 'public')));

app.listen(8080);
