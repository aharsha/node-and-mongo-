var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("testing");
  var myobj = { proid: 102, proname: "hp",proprice:42000 };
  dbo.collection("product").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});