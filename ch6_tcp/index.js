/* 
* @Author: ChenShas
* @Date:   2017-04-10 16:54:04
* @Last Modified by:   ChenShas
* @Last Modified time: 2017-04-10 18:40:45
*/
/*
* 模块依赖
 */
var net=require('net');
var count=0;
var users={};
/*
* 创建服务器
 */
var server=net.createServer(function(conn){
  conn.write(
    '\n > welcome to \033[92mnode-chat\033[39m'+
    '\n > '+count+' other people are connected at this time.'+
    '\n > please write your name and press enter : '
    );
  count++;
  var nickname;
  conn.on('data',function(data){
    data=data.replace('\r\n','');
    if(!nickname){
      if(users[data]){
        conn.write('\033[93m> nickname aleady in use.try again:\033[39m');
        return;
      }
      else{
        nickname=data;
        users[nickname]=conn;
        broadcast('\033[90m> '+nickname+' joined the room\033[39m\n');
        console.log('\033[90m> '+nickname+' joined the room\033[39m\n');
      }
    }
    else{
      broadcast('\033[96m >'+nickname+':\033[39m '+data+'\n',true)
    }
    
  });
  conn.setEncoding('utf8');
  /*
  * 客户端请求关闭连接。底层套接字关闭时nodejs触发close事件
   */
  conn.on('close',function(){
    count--;
    delete users[nickname];
    broadcast('\033[90m> '+nickname+' left the room\033[39m\n');
  })
  /**
   * 广播消息
   * @param  {[type]} msg          消息内容
   * @param  {[type]} exceptMyself 是否除去自己
   * @return {[type]}              [description]
   */
  function broadcast(msg,exceptMyself){
    for (var i in users){
      if(!exceptMyself || i!=nickname){
        users[i].write(msg);
      }
    }
  }
  // console.log('\033[90m    new connection!\033[39m');
});

/*
* 监听
 */
server.listen(3000,function(){
  console.log('\033[96m    server listening on *:3000\033[39m');
})