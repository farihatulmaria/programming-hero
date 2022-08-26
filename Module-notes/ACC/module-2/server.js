const http = require('http');

const server = http.createServer(function(req,res){
    console.log(req.url);
});
const PORT = 5000;
server.listen(PORT);
console.log(`server is running at ${PORT}`);