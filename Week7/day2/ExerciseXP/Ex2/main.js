let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Using the map() method, say hello to the users using only their firstname
// (ie. “Hello Bradley”, “Hello Chloe” ect…)

let helloArr = users.map( e => {return `Hello ${e.firstName}`})
helloArr.forEach((item) => console.log(item));

// Using the filter() method, create a new array,
// containing only the Full Stack Residents.

let fullStRes = users.filter( e => e.role == 'Full Stack Resident')
console.log(fullStRes);

// Bonus : Chain the filter method with a map method, to congratulate the Full Stack Residents (ie. “Good job Bradley”, “Good Job Chloe” ect…)

let HelloFullSt = users.filter( e => e.role == 'Full Stack Resident').map( e => `Hello ${e.firstName}`)
console.log(HelloFullSt);
