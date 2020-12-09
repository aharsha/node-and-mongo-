//load express module
var expressmodule = require('express');
//create exepress object
var expressobject = expressmodule();

expressobject.get("/home",function(req,res)
{
    res.send("welcome to server programming ")
})
//call listen function on express object
//it means server running on 4040 port
var server = expressobject.listen(4040, function () {
    console.log('Node server is running..');
});


