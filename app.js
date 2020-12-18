http=require('http'); 
url=require('url');
querystring = require('querystring'); 
function onRequest(req,res){
var path = url.parse(req.url).pathname; 
console.log('Request for'+path+'received.'); 
var query =url.parse(req.url).query;
var name = querystring.parse(query)["username"]; 
var email=querystring.parse(query)["email"];
var gender = querystring.parse(query)["gender"];
var dob = querystring.parse(query)["dob"]; 
var bloodGroup = querystring.parse(query)["bgroup"];
/* res.write(alert('<h1>Your name and password<h1>'+name+''+dob+'<h1>has been registered successfully<h1>')); */
res.write('<h1>Employee Details<h1>'+name+''+gender+''+email+''+dob+''+bloodGroup+'<h1>has been stored successfully<h1>');
res.end();
}
http.createServer(onRequest).listen(8000); 
console.log('Server has Started…….');




