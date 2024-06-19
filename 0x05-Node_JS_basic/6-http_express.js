const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Define a fallback route for any other endpoint
app.use((req, res) => {
  res.status(404).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="utf-8">
        <title>Error</title>
        </head>
        <body>
        <pre>Cannot GET ${req.originalUrl}</pre>
        </body>
        </html>
    `);
});

app.listen(1245, () => {
  console.log('Running');
});

module.exports = app;
