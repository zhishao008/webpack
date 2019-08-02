var express = require('express');
var app = express();
var path = require("path");
// app.use('/', express.static('dist'));
console.log("__dirname "+ __dirname);
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/dist/" + "index.html" );
})
// app.get('/', function (req, res){
//   res.sendFile(__dirname + "/dist/" + "index.html" + '/login')
// })

app.use(express.static(__dirname + '/dist'))

// 的 index.html 中处理任何一个 route
app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

// app.get('/process_get', function (req, res) {
 
//    // 输出 JSON 格式
//    var response = {
//        "first_name":req.query.first_name,
//        "last_name":req.query.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// })
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://localhost:", host, port)
 
})