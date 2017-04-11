/* 
* @Author: ChenShas
* @Date:   2017-04-11 16:08:58
* @Last Modified by:   ChenShas
* @Last Modified time: 2017-04-11 17:27:55
*/

var http=require('http');
/*
* server
 */
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('hello world');
}).listen(3000);

/**
 * client
 */
http.request({//request方法用于初始化一个新的http.client request对象
	host:'127.0.0.1',
	port:3000,
	url:'/',
	method:'GET'
},function(res){
	var body='';
	res.setEncoding('utf8');
	res.on('data',function(chunk){
		body+=chunk;
	});
	res.on('end',function(){
		console.log('\n we got:\033[96m'+body+'\033[39m\n');
	});
}).end();//在创建完一个请求之后，在发送给服务器前还可以和request对象进行交互





