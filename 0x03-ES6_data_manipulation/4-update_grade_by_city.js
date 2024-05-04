export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(newGrades) || !newGrades.length === 0) {
    return 0;
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObject ? gradeObject.grade : 'N/A',
      };
    });
}
