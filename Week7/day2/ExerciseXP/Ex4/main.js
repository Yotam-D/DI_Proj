let student = [{
    name: "Ray",
    course: "Computer Science",
    isPassed: true
  },
  {
    name: "Liam",
    course: "Computer Science",
    isPassed: false
  },
  {
    name: "Jenner",
    course: "Information Technology",
    isPassed: true
  },
  {
    name: "Marco",
    course: "Robotics",
    isPassed: true
  },
  {
    name: "Kimberly",
    course: "Artificial Intelligence",
    isPassed: false
  },
  {
    name: "Jamie",
    course: "Big Data",
    isPassed: false
  }
];

// Using the filter() method, create a new array, containing the students that passed the course.

let PassedStd = student.filter((obj) => obj.isPassed)
console.log(PassedStd);

// Bonus : Chain the filter method with a map method, to congratulate the students with their name
// and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)


let congArr = student.filter((obj) => obj.isPassed).map((obj) => {
  return `Good job ${obj.name},you passed the course in ${obj.course}`
})
congArr.forEach(congrate => {console.log(congrate);});
