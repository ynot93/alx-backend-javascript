export default function createIteratorObject(report) {
  let employees = [];
  for (const department of Object.keys(report.allEmployees)) {
    employees = employees.concat(report.allEmployees[department]);
  }

  let index = 0;
  return {
    next() {
      if (index < employees.length) {
        const result = { value: employees[index], done: false };
        index += 1;
        return result;
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
