/* 
* @Author: ChenShas
* @Date:   2017-04-11 16:59:16
* @Last Modified by:   ChenShas
* @Last Modified time: 2017-04-11 17:04:20
*/

var qs = require('querystring'),
	http = require('http');
	// reload = require('reload');

var search = process.argv.slice(2).join('').trim();

if(!search.length){
	return console.log('\n Usage: node tweets <search term>\n');
}
console.log('\n  searching for: \033[96m' + search + '\033[39m\n');
http.request({
	host: 'search.twitter.com',
	path: '/search.json?' + qs.stringify({q: search})

}, function(res){
	var body = '';
	res.setEcoding('utf8');
	res.on('data', function(chunk){
		body += chunk;
	});
	res.on('end', function(){
		var obj = JSON.parse(body);
		obj.result.forEach(function(tweet){
			console.log('   \033[90m' + tweet.text + '\033[39m');
			console.log('   \033[94m' + tweet.from_user + '\033[39m');
			console.log('----');
		});
	});
}).end();