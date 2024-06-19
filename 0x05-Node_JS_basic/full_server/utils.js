import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = {};
        const lines = data.split('\n').filter(line => line.trim() !== '');

        lines.slice(1).forEach(line => {
          const [firstname, lastname, age, field] = line.split(',');
          if (field && firstname) {
            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(firstname);
          }
        });

        Object.keys(students).forEach(key => {
          students[key].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
        });

        resolve(students);
      }
    });
  });
};

export default readDatabase;
