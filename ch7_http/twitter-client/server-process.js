/* 
* @Author: ChenShas
* @Date:   2017-04-11 16:20:11
* @Last Modified by:   ChenShas
* @Last Modified time: 2017-04-11 16:57:14
*/

var http = require('http');
var qs = require('querystring');

http.createServer(function(req,res){
	var body='';
	req.on('data',function(chunk){
		body+=chunk;
	});
	req.on('end',function(){
		res.writeHead(200);
		res.end('done');
		console.log('\n got name \033[90m'+qs.parse(body).name+'\033[39m\n');
	});
}).listen(3000);
