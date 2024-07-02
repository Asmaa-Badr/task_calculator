/*const http =require('node:http');
 //import http from 
const server=http.createServer((req,res)=>{
   res.end("Hello World");
})
server.listen(3001,()=>{
   console.log("Listening on port 3001 ");
})*/

 
//***************************************************************** */

/*const { result } = require('lodash');
const http=require('node:http');
 const url = require('url');
 //const querystring = require('querystring');
  
 const server=http.createServer((req,res)=>{
       const urlCalculator =url.parse(req.url,true);
       const objCalculator=urlCalculator.query;
       const num1=parseInt(objCalculator.a());
       const num2=parseInt(objCalculator.b());
       let result;
        res.write(urlCalculator.pathname());
        res.write(num1,"  ",num2);
        

      switch (urlCalculator.pathname()) {
        case 'add':
          result = num1 + num2;
          break;
        case 'subtract':
          result = num1 - num2;
          break;
        case 'multiply':
          result = num1 * num2;
          break;
        case 'divide':
          result = num1 / num2;
          break;
          default:
            result="Error";

   }
res.write("response => ",result);
res.end();
 
 });
 server.listen(3000,'localhost',()=>{
  console.log("you are listening on 3000");
 });

 */


 const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url);
  const { a, b } = querystring.parse(query);
  const num1 = parseInt(a);
  const num2 = parseInt(b);
  
  let result;
  switch (pathname) {
    case '/add':
      result = num1 + num2;
      break;
    case '/subtract':
      result = num1 - num2;
      break;
    case '/multiply':
      result = num1 * num2;
      break;
    case '/divide':
      result = num1 / num2;
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404.html');
      return;
  }
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write("response=> "+ result.toString());
  res.end();
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
