export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    if (!Array.isArray(students) || students.every((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(setName) {
    if (typeof setName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = setName;
  }

  get length() {
    return this._length;
  }

  set length(setLength) {
    if (typeof setLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = setLength;
  }

  get students() {
    return this._name;
  }

  set students(setStudents) {
    if (!Array.isArray(setStudents) || setStudents.every((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = setStudents;
  }
}
