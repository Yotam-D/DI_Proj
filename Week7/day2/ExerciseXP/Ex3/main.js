let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string

let str = epic.reduce((prev, curr) => prev+" "+curr)
console.log(str);
