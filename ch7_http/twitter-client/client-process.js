/* 
* @Author: ChenShas
* @Date:   2017-04-11 16:35:56
* @Last Modified by:   ChenShas
* @Last Modified time: 2017-04-11 16:57:16
*/

var http = require('http');
var qs = require('querystring');

function send(theName){
	http.request({
		host:'127.0.0.1',
		port:3000,
		url:'/',
		method:'POST'
	},function(res){
		res.setEncoding('utf8');
		res.on('end',function(){
			console.log('\n \033[90m request complete!\033[39m');
			process.stdout.write('\n your name:');
		});
	}).end(qs.stringify({name:theName}));
}
process.stdout.write('\nyour name:');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data',function(name){
	send(name.replace('\n',''));
});
