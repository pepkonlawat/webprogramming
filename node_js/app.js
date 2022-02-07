// function helloWorld(){
//     console.log("hello world")
// }
// var t=setTimeout(helloWorld,8000);
// clearTimeout(t)
// var i = 0;
// var Counter = setInterval(counter, 2000);

// function counter() {
//     i++;
//     console.log(i);
// }
// setTimeout(function () {
//     clearInterval(Counter);
// }, 10000);

// var circle = require('./circle.js');
// console.log(circle.area(50));
// console.log(circle.add(1,2))
// console.log(circle.pi);

// var fs = require('fs');

// function readFile(str, callback){
//     var lines =[];
//     fs.readFile(str, function (err, data) {
//         if (err) throw err; 
//         lines.push(data); 
//         console.log(data.toString());
//     });
//    callback(lines);
// }

// var a, b;
// readFile('./20.txt', function(data){
//     a= data;
// }); 

// readFile('./10.txt',function(data){
//     b= data;
// }); 
// console.log("a -- "+a);
// console.log("b -- " +b);

// var assert = require('assert');
// function add (a, b) { 
//     return a + b;
// }
// var functResult = add(1,2);
// assert( functResult === 3, 'Correct answer: one plus two is three');
// var crypto = require('crypto');
// var fs = require('fs');
// var shasum = crypto.createHash('sha1');
// var s = fs.ReadStream('file.txt');
// s.on('data', function (d) {
//     shasum.update(d);
// });
// s.on('end', function () {
//     var d = shasum.digest('hex');
//     console.log(d + ' -- file.txt');
// });
// var crypto = require('crypto')
// var fs = require('fs')
// var hash = crypto.createHash('sha1').update("Hello World").digest('hex')
// console.log(hash);

// var dns = require('dns');
// dns.lookup('www.google.com', function onLookup(err,addresses, family) {
//   console.log('addresses:', addresses);
// });

// //--------------------------//
// var fs = require('fs'); 
// fs.writeFile('message.txt', 'Hello Node', function (err) {
//   if (err) throw err;
//     console.log('It\'s saved!');
// });
// //----------------------------//

// var fs=require('fs')
// var readMe = fs.readFileSync('./file.txt','utf8')
// console.log(readMe)
// fs.mkdir('Project', function(){
//   fs.writeFileSync('./Project/Output.txt', readMe)
// })

// var os=require('os');
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.release());
// console.log(os.uptime());
// console.log(os.loadavg());

// var readline = require('readline');
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("What do you think of node.js? (easy/difficult)", function (answer) {
//     // TODO: Log the answer in a database
//     console.log("Thank you for your valuable feedback:", answer);
//     rl.close();
// });

// var fs = require('fs');
// var zlib = require('zlib');
// var r = fs.createReadStream('file.txt');
// var z = zlib.createGzip();
// var w = fs.createWriteStream('file.txt.gz');
// r.pipe(z).pipe(w);

// var fs = require('fs')
// var data = 'Hello World Modi quiamaiores. Nihil sapienteet atque. Sintnumquammolestiaeiurenemo fugiatasperioresaspernaturducimus. Sit rerumofficiisreprehenderithic nisi oditofficiaaccusantiumeos.'
// var writerStream = fs.createWriteStream('output.txt')
// writerStream.write(data, 'utf8')
// writerStream.end()
// writerStream.on('finish', function () {
//     console.log("Output finish")
// })

// var url= require('url');
// var result = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
// console.log(result)