var express = require('express')
var app = express();

function Person(name, email, number) {
    this.name = name;
    this.email = email;
    this.number = number;
}

app.use(express.static(__dirname + "/public"));
app.get('/contactlist',function(req,res){
  console.log("Server received a GET request");
  var person1 = new Person('Tim', 'tim@email.com', '(111)111-1111');
  var person2 = new Person('Emily', 'em@email.com', '(222)111-1111');
  var contactlist = [person1, person2];
  res.json(contactlist);
});
app.listen(3000);
console.log("Server running on port 3000");
