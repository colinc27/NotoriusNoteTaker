const express = require('express');

const port = process.env.port || 5000;
const app = express();
const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlRoutes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(port, () => {
  console.log(`API server now on port ${port}!`);
});
