import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const databaseFile = process.argv[2];
      const { students } = await readDatabase(databaseFile);

      res.write('This is the list of our students\n');
      for (const [field, names] of Object.entries(students).sort()) {
        res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
      }

      res.status(200).end();
    } catch (error) {
      res.status(500).send(`Cannot load the database`);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const databaseFile = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const { students } = await readDatabase(databaseFile);
      const studentsInMajor = students[major] || [];

      res.status(200).send(`List: ${studentsInMajor.join(', ')}`);
    } catch (error) {
      res.status(500).send(`Cannot load the database\n`);
    }
  }
}

export default StudentsController;
