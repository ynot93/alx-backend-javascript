import fs from 'fs';

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = {};
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        lines.slice(1).forEach((line) => {
          const [firstname, , , field] = line.split(',');
          if (field && firstname) {
            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(firstname);
          }
        });

        resolve({ students });
      }
    });
  });
}
