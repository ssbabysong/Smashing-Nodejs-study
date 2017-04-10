/* 
* @Author: bali
* @Date:   2017-04-10 13:08:01
* @Last Modified by:   bali
* @Last Modified time: 2017-04-10 13:27:48
*/

var mybuffer = new Buffer('==ii1j2i3h1i23h','base64');
console.log(mybuffer);
require('fs').writeFile('logo.png',mybuffer);