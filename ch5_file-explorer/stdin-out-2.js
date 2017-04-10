/* 
* @Author: bali
* @Date:   2017-04-10 14:48:35
* @Last Modified by:   bali
* @Last Modified time: 2017-04-10 15:41:48
*/

var fs=require('fs'),
stdin=process.stdin,
stdout=process.stdout,
cwd=process.cwd();

/**
 * 主函数
 */
fs.readdir(cwd, function(err,files){
  var stats=[];
  console.log('');

  if(!files.length){
    return console.log(' \033[31m No files to show!\033[39m\n');
  }

  console.log('select which file or directory you want to see\n'); 
  /**
   * 读文件目录
   * @param  int i 索引初始化0
   * @return {[type]}   [description]
   */
  function file(i){
    var filename=files[i];

    fs.stat(__dirname+'/'+filename , function(err,stat){
      stats[i]=stat;

      if(stat.isDirectory()){
        console.log(' '+i+' \033[36m'+filename+'/\033[39m');
      }
      else{
        console.log(' '+i+' \033[90m'+filename+'\033[39m');
      }
      i++;
      if(i==files.length){
        read();
      }
      else{
        file(i);
      }
    });
  } 
  /**
   * 读取用户输入
   * @return {[type]} [description]
   */
  function read(){
    console.log('');
    process.stdout.write(' \033[33menter your choice: \033[39m');
    process.stdin.resume();
    process.stdin.setEncoding('utf-8');
    stdin.on('data',option);
  }
  /**
   * 为read()定义option
   * @param  {[type]} data 用户输入
   * @return {[type]}     输入结果反馈，暂停输入流
   */
  function option(data){
    var filename=files[Number(data)];
    if(!files[Number(data)]){
      stdout.write(' \033[31menter your choice: \033[39m');
    }
    else{
      stdin.pause();
      if(stats[Number(data)].isDirectory()){
        fs.readdir(__dirname+'/'+filename, function(err,files){
          console.log('');
          console.log(' ('+files.length+' files)');
          files.forEach(function(file){
            console.log(' - '+file);
          });
          console.log('');
        });
      }
      else{
        fs.readFile(__dirname+'/'+filename,'utf-8',function(err,data){
          console.log('');
          console.log('\033[90m'+data.replace(/(.*)/g,' $1')+'\033[39m');
        })
      }
    }
  }

  file(0);
});









