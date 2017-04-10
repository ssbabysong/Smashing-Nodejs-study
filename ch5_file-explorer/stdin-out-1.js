/* 
* @Author: bali
* @Date:   2017-04-10 13:50:29
* @Last Modified by:   bali
* @Last Modified time: 2017-04-10 14:52:29
* @description: 无法验证输入的版本1
*/

var fs=require('fs');

fs.readdir(process.cwd(), function(err,files){
  console.log('');

  if(!files.length){
    return console.log(' \033[31m No files to show!\033[39m\n');
  }

  console.log('select which file or directory you want to see\n');

  function file(i){
    var filename = files[i];

    fs.stat(__dirname+'/'+filename , function(err,stat){
      if(stat.isDirectory()){
        console.log(' '+i+' \033[36m'+filename+'/\033[39m');
      }
      else{
        console.log(' '+i+' \033[90m'+filename+'\033[39m');
      }
      i++;
      if(i==files.length){
        console.log('');
        process.stdout.write(' \033[33menter your choice: \033[39m');
        process.stdin.resume();
        process.stdin.setEncoding('utf-8');
      }
      else{
        file(i);
      }
    });
  }
  file(0);
});