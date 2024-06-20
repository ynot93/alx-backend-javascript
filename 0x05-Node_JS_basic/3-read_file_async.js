const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
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

      resolve({ totalStudents, students });
    });
  });
}

module.exports = countStudents;
