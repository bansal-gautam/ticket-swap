let express = require('express');
let app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {foo: 'FOO'});
});

app.listen(3000, () => console.log('App listening on port 3000'));