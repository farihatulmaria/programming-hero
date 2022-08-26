const http = require('http');
const _ = require('underscore');


const server = http.createServer(function(req,res){
    console.log('Server is running faster than ever');
});
server.listen(5000)
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
const nameList =_.pluck(stooges, 'name');
const ageList =_.pluck(stooges, 'age');
console.log(nameList);
console.log(ageList);