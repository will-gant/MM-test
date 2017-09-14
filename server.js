const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.listen(3000, function() {
  console.log('listening on port 3000')
})

app.get('/', function(req, res) {
  res.render('index.ejs')
})

app.post('/company', function(req,res){

});

module.exports = app;
