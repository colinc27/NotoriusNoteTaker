const express = require('express');

const port = process.env.port || 5000;
const app = express();
const apiroutes = require('./routes/apiroutes');
const htmlroutes = require('./routes/htmlroutes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiroutes);
app.use('/', htmlroutes);

app.listen(port, () => {
  console.log(`API server now on port ${port}!`);
});
