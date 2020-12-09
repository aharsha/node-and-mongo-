var filewrite = require('fs');

filewrite.appendFile('abc.txt', 'mnklfdnklmfklmgbklfmbklmfklbmklfdmbklmfbkmfmbkmfbmfkmbkmfmfmbmfbmfmbfmbmfmbfmbmkfmbkmfbmfbmfkmbfbmfmbfkmbkfmbkfmbkfmbkm', function (err) { 
    if (err)
        console.log(err);
    else
        console.log('Write operation complete.');
        for(var i=1; i<12;i++)
 {
    console.log("do some thing else");
    
 }
});