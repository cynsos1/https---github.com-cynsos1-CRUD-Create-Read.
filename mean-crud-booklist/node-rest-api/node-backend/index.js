let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoDb = require('./database/db'),
  createError = require('http-errors');
 
mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db, {
}).then(() => {
    console.log('Database sucessfully connected ')
  },
  error => {
    console.log('Database error: ' + error)
  }
)
 
const bookRoute = require('./routes/book.routes')
 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
 
// Static directory path
app.use(express.static(path.join(__dirname, 'dist/angular-mean-crud-tutorial')));
 
 
// API root
app.use('/api', bookRoute)
 
// PORT
const port = process.env.PORT || 8001;
 
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
 
// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});
 
// Base Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});
 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-mean-crud-tutorial/index.html'));
});
 
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
