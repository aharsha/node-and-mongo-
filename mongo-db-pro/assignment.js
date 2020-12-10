//1->load mongodb module
var mongoModule = require('mongodb');
//2 ->create mongodbobject
var mongoObject=mongoModule.MongoClient;

//3 -> create database
//prepare database url
var dburl = "mongodb://localhost:27017/university";
mongoObject.connect(dburl,function(err,x)
{
    if(err)
    {
        console.log('connection error');
        throw err;
    }
    //step4 ->create database object
    var versity = x.db();
    //step5  ->insert row(document) in table(collection)
    //prepare document
    var s1 = {"rollno":6,"name":"bachan","marks":345 };
    versity.collection("student").insertOne(s1,function(err,res)
    {
        if(err)
        {
            console.log("some database error");
            throw err;
        }
        console.log("one document added into student collection");
        x.close();
    })
})
