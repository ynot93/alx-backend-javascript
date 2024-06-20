const http = require('http');
const countStudents = require('./3-read_file_async');

const databaseFile = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(databaseFile)
      .then(({ totalStudents, students }) => {
        res.write(`Number of students: ${totalStudents}\n`);

        for (const [field, names] of Object.entries(students)) {
          res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
        }
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
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
