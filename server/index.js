
const express = require('express')
const connectDb = require('./db')
const attendanceRoutes = require('./routes/attendance');
const bodyParser = require('body-parser');

const port = 8080

const app = express();
app.use(bodyParser.json());

connectDb();

app.use('/attendance', attendanceRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})