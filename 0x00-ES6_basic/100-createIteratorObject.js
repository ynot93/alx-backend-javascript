export default function createIteratorObject(report) {
    let employees = [];
    for (const department of Object.keys(report.allEmployees)) {
        employees = employees.concat(report.allEmployees[department]);
    }

    let index = 0;
    return {
        next: function() {
            if (index < employees.length) {
                return { value: employees[index++], done: false };
            } else {
                return { done: true };
            }
        },
        [Symbol.iterator]: function() { return this; }
    };
}
