var http = require('http');
var fs = require('fs');
var server = http.createServer();
var port = 3000;
server.listen(port, function() {
    console.log('웹 서버가 시작되었습니다. : %d', port);
});

server.on('connection', function(socket) {
    var addr = socket.address();
    console.log('클라이언트가 접속했습니다. : %s, %d', addr.address, addr.port);
});
server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
	
    var filename = 'media/house.png';
    var infile = fs.createReadStream(filename, {flags: 'r'} );
 
    infile.pipe(res); 
	 
});



 

 
