var express = require('express');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile); //서버가 HTML 렌더링을 할 때, EJS 엔진을 사용하도록 설정합니다.

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
 });

 
 
app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함.');
    res.send({name:'BTS', age:20});
});


