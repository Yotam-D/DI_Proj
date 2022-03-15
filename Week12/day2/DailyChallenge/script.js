const mainModules = require("./main.js");
const http = require("http");

const a = mainModules.largeNumber;
const b = 5;

console.log(a + b);

const myFirstServer = http.createServer((req, res) => {
  // res.end('hello from my first server')
  res.end(`
    <p>My Module is<p>
    <p>${a + b}<p>
    <h1>Hi there at the frontend<h1>`);
});

myFirstServer.listen(3000, () => {
  console.log("First Server is listening to port 3000");
});

const mySecServer = http.createServer((req, res) => {
  let now = JSON.stringify(mainModules.currentDateTime);
  res.setHeader('Current-Date-And-Time', now)
  res.end(`current Date and Time: ${now}`);
});

mySecServer.listen(8080, () => {
  console.log("second Server Listening..");
});
