const express = require('express');
const countStudents = require('./3-read_file_async');

const databaseFile = process.argv[2];

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    const { totalStudents, students } = await countStudents(databaseFile);

    res.write(`Number of students: ${totalStudents}\n`);

    for (const [field, names] of Object.entries(students)) {
      res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
    }

    res.end();
  } catch (error) {
    res.end(error.message);
  }
});

app.listen(1245, () => {
  console.log('Running');
});

module.exports = app;
