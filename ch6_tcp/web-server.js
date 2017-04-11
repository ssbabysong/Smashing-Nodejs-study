/* 
* @Author: ChenShas
* @Date:   2017-04-10 16:40:25
* @Last Modified by:   ChenShas
* @Last Modified time: 2017-04-10 16:51:26
*/

var http=require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/html'});
	res.end('<h1>hello world</h1>');
}).listen(3000);