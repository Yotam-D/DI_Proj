const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:

let arr = Object.entries(users);
console.log(arr);


// Modify the outcome of part 1, by multipling the user’s ID by 2.

// option A by manipulate the entries array
let arr2 = Object.entries(users).map(el => [el[0], el[1]*2]);
console.log(arr2);


// option B by changing the users object
Object.keys(users).forEach(key => users[key] *= 2)
let arr3 = Object.entries(users);
console.log(arr3);
