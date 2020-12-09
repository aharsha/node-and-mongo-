//loading  fs module and holding in filereading refference
var filereading = require("fs");

// Asynchronous read
filereading.readFile('input.txt', function (err, filedata) {
   if (err) {
      return console.error(err);
   }
 for(var i=1; i<12;i++)
 {
    console.log("do some thing else");
    
 }
 
   console.log("Asynchronous read: " + filedata.toString());
});

// Synchronous read
var filedata = filereading.readFileSync('input.txt');
console.log("Synchronous read: " + filedata);

console.log("Program Ended");