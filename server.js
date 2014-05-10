var express = require('express');
var Slackhook = require('slackhook');
var slackhook = new Slackhook({
  domain: 'example',
  token: 'example'
});
var app = express();

app.use(express.urlencoded());
app.use(express.json());

app.post('/hook/teamcity', function(req, res){
  if( !(req.body && req.body instanceof Object && Object.keys(req.body).length > 0) ) return res.send(403);

  var teamcityText = req.body.build ? req.body.build.text : 'No text from teamcity';
  var buildStatus = req.body.build ? req.body.build.buildStatus : 'No build status';
  var buildLink = req.body.build ? req.body.build.buildStatusUrl : 'No build link';

  var text = teamcityText;
  text += '\nStatus: ' + buildStatus;
  text += '\n<' + buildLink + '|Build>';

  var json = {
    text: text,
    channel: '#webhooks',
    username: 'Teamcity'
  };

  slackhook.send(json, function(err, res){
    console.log(err, res);
  });

  res.send(200);
});

app.get('/', function(req, res){
  res.send(200);
});

app.listen(process.env.PORT || 3232);
console.log('App listening on port ' + (process.env.port || 3232) );
