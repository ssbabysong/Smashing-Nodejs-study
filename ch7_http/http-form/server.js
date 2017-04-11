/* 
* @Author: ChenShas
* @Date:   2017-04-11 15:19:51
* @Last Modified by:   ChenShas
* @Last Modified time: 2017-04-11 15:52:54
*/

var http = require('http');
var qs=require('querystring');
http.createServer(function(req,res){
	if('/'==req.url){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.end(['<form method="POST" action="/url">',
			'<h1>my form</h1>',
			'<fieldset>',
			'<label>personal information</label>',
			'<p>what is your name</p>',
			'<input type="text" name="name">',
			'<p><button>submit</button></p>',
			'</form>'
			].join(''));
	}
	// 提交表单之后
	else if('/url'==req.url&&'POST'==req.method){
		var body='';
		req.on('data',function(chunk){
			body+=chunk;
		});
		req.on('end',function(){
			res.writeHead(200,{'Content-Type':'text/html'});
			res.end('<p>Content-Type:'+req.headers['content-type']+'</p>'+'<p>your name is:</p><pre> '+qs.parse(body).name+'</pre>');
		})
	}
	// 直接输入/url之后
	else if('/url'==req.url&&req.method!='POST'){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.end('you sent a <em>'+req.method+'</em> request!');
	}
	else{
		res.writeHead(404);
		res.end('not found!');
	}
}).listen(3000);