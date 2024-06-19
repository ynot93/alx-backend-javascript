const http = require('http');
const { countStudents } = require('./3-read_file_async');

const databaseFile = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Call countStudents function
    countStudents(databaseFile)
      .then(() => {
        res.end('This is the list of our students');
      })
      .catch((error) => {
        res.end(`${error.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

app.listen(1245, () => {
  console.log('Running');
});

module.exports = app;
