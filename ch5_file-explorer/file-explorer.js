/* 
* @Author: bali
* @Date:   2017-04-10 13:21:32
* @Last Modified by:   bali
* @Last Modified time: 2017-04-10 13:27:29
*/

var fs = require('fs');
// fs模块是唯一一个同时提供同步和异步API的模块
fs.readdir(__dirname,function(err,files){
  console.log(files);
});