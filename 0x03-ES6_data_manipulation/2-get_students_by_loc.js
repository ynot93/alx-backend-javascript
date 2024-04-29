import getListStudents from './0-get_list_students.js';

function getStudentsByLocation(students, city) {
  if (!typeof(students) === 'array') {
    return [];
  }
  cityObjects = getListStudents().map((obj) => {
    return obj.id;
  });
  return cityObjects;
}