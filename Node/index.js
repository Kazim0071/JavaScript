const fs = require("fs");
const http = require('http');

////////////////////////////////////////////////////////////////
////Files
// Blocking synchronous way
// const data = fs.readFileSync('./txt/input.txt', 'utf8');
// console.log(data);

// const updatedData = `This is what we know about the avocado: ${data}. \n Created on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', updatedData);
// console.log('File written successfully');

// Non-blocking asynchronous way
// fs.readFile(`./txt/start.txt`, "utf-8", (err, data) => {
//   console.log(data);

//   fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data1) => {
//     console.log(data1);

//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data2) => {
//       console.log(data2);

//       fs.writeFile(`./txt/final.txt`, `${data1}\n${data2}`, "utf-8", (err) =>
//         console.log(`Your File has been Written`)
//       );
//     });
//   });
// });

// console.log("Will read your files");

////////////////////////////////////////////////////////////////
////Server
const server = http.createServer((req, res) => {
  res.end('Hello from the server')
})

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening from the server on port 8000')
})