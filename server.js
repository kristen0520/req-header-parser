var express = require("express");
var app = express();

app.get('/', function(req, res){

   var head = req.headers;
    

    var software = head['user-agent'];
  
    var lang = head['accept-language'];
    
    if(software.indexOf('Mac') >= 0){software = software.slice(software.indexOf('(')+1, software.indexOf(')')) }
    
   // var ip = req.connection.remoteAddress;
    var ip = head['x-forwarded-for']
    
   var obj = {"language": lang, "software": software, "ipAddress": ip}
    //var obj = head;
    
    res.send(obj);
    res.end();
})

var port = process.env.PORT || 3000
app.listen(port, console.log("app listening on port "+port))
