const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

//set the view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//set the port listner
let port = process.env.PORT;
if (port == '' || port == null) {
  port = 3000;
}

app.get('/', (req, res) => {
  res.render('main');
});

app.get('/make', (req, res) => {
  res.render('make');
});

app.get('/take', (req, res) => {
  res.render('take');
});

app.post('/', (req, res) => {
  const op = req.body.option;
  console.log(op);
  res.redirect('/' + op);
});

app.post('/make', (req, res) => {
  const name = req.body.qname;
  const level = req.body.level.value;
  console.log(level + ' ' + name);
});

app.listen(port, err => {
  if (!err) {
    console.log('Server Online at ' + port);
  }
});
