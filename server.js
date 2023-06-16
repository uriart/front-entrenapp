//Install express server
const express = require('express');
const path = require('path');
const { version } = require('./package.json')

const app = express();

app.get('/health', (req, res) =>{
    res.send('OK')
})

app.get('/version', (req, res) =>{
    res.send(version)
})

// Serve only the static files form the dist directory
app.use(express.static('./dist/authapp'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/authapp/'}),
);

// Start the app by listening on the default Heroku port
app.listen(4200);
