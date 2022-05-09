const express = require('express');
const path = require('path');

const app = expreess();

app.user(express.static('./dist/candito-program'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/candito-program/'})
);
