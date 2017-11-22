var express = require('express')
var app = express()
var request = require('request');
var https = require('https');

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))

function get_trustyou(trust_you_id, callback) {
    var options = {
        uri : 'http://ec2-107-20-66-27.compute-1.amazonaws.com:5000/'+trust_you_id,
        method : 'GET'
    };
    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
        }
        else {
            res = 'Not Found';
        }
        callback(res);
    });
}
app.get('/', function(request, response) {
  get_trustyou("appid", function(resp){
      console.log(resp);
      response.send(resp)
  });
})
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
