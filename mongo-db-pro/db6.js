var mc = require('mongodb');
mo = mc.MongoClient;
var url = "mongodb://localhost:27017/testing";
var expr = require('express');
var app = expr();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));



  

  



app.get('/register', function (req, res) {
    setTimeout(function()
    {
        res.sendFile('E:/nodepro/dbtest/reg.html');
    },6000)

});




app.post('/student-data', function (req, res) {
    
var stu = { rollno: req.body.rno, name: req.body.nm, marks:req.body.mrks };
mo.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    //create database object
    var dbo = db.db("testing");
dbo.collection("student").insertOne(stu, function(err, rs) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
      db.close();
});

    res.send('recored added ');
});
//post
var server = app.listen(4040, function () {
    console.log('Node server is running..');
});