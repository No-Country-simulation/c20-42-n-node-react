var createError = require('http-errors');
require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require('cors');
var logger = require('morgan');
var passport = require('passport')
var swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var centroAdopcionRouter = require('./routes/centroadopcion');
var authRouter = require('./routes/auth');
var mascotasRouter = require('./routes/mascotas');
var adoptanteRouter = require('./routes/adoptantes')
var adopcionRouter = require('./routes/adopcion');


require('./middleware/passport'); 

var app = express();

app.use(cors({
  origin:'*',
  methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials:false
}));
app.use(passport.initialize())

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerFile));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/usuarios', usuariosRouter);
app.use('/api/centro-adopcion',centroAdopcionRouter)
app.use('/api/auth',authRouter)
app.use('/api/mascotas',mascotasRouter);
app.use('/api/adoptantes',adoptanteRouter);
app.use('/api/adoption', adopcionRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
