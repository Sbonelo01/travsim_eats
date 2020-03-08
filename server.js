
const {
    newReg,
    addOrder
} = require('./database')

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser')

app.use(express.urlencoded({
    extended: true
}));

app.use('/', express.static(__dirname + '/'))
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/travSIM-EATS', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname + '/form.html'));
});

app.post('/formRecommendation', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const post = {
    name: name,
    email: email,
    message: message,
    created_at: new Date()
  }

  connection.query(`INSERT INTO newVisitors SET ?`, post, (err) => {
    if (err) throw err;
    console.log('DATA INSERTED');
    return res.redirect('/formRecommendation')
  });
})


const server = app.listen(`${port}`);
console.log(`listening on port ${port}...`);
