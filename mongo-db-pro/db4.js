var mc = require('mongodb');
mo = mc.MongoClient;
var url = "mongodb://localhost:27017/testing";

mo.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  //create database object
  var dbo = db.db("testing");

  var product = { proid: 103, proname: "acer",proprice:32000 };

  dbo.collection("product").insertOne(product, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
});