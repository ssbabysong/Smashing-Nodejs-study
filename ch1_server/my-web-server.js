/* 
* @Author: bali
* @Date:   2017-04-09 14:07:16
* @Last Modified by:   bali
* @Last Modified time: 2017-04-10 13:28:35
*/
var http=require('http');
var serv = http.createServer(
  function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<marquee>smashing node!</marquee>');
  }
);
serv.listen(3000);