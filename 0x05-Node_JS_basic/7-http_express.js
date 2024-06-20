const express = require('express');
const countStudents = require('./3-read_file_async');

const databaseFile = process.argv[2];

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const { totalStudents, students } = await countStudents(databaseFile);

    let response = 'This is the list of our students\n';
    response += `Number of students: ${totalStudents}\n`;

    for (const [field, names] of Object.entries(students)) {
      response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    res.send(response);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}\n`);
  }
});

app.listen(1245, () => {
  console.log('Running');
});

module.exports = app;
