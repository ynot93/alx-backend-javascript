const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = {};
    let totalStudents = 0;

    lines.slice(1).forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (field && firstname) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
        totalStudents += 1;
      }
    });

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
