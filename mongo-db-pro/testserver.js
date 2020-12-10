var expModule = require('express');

var expressObject = expModule();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo;
var database;
//mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});
MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
   dbo = db.db("mydb");
  database=db;
});
//localhost:5050/getproducts
expressObject.get('/register', function (r, resp) {
    resp.send('product id : 101, productname: dell, price:45000');
});
expressObject.get('/getproducts', function (r, resp) {
var proList;
    dbo.collection("product").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        proList=result;
       
      });
      console.log(proList);
    resp.send("list ="+proList);
});
var f1=function()
{
console.log("server started on 5050 port");
}
expressObject.listen(5050,f1 );