import express from "express";
import http from "http";
import bodyParser from "body-parser";
import path from "path";
var favicon = require("serve-favicon");
var logger = require("morgan");
//require the models for the passport-jqt authentication

const sys = require('sys');
//this is the mqtt client
const mqtt = require('mqtt');
const port = 5000;
const io = require('socket.io').listen(port);
console.log("socket.io server listening on port ", port);
const client = mqtt.connect("mqtt://192.168.0.105");
//=======================================================================================================

//Combine the Socket.IO functionality and an MQTT client to push MQTT topics to a browser
io.sockets.on('connection', function (socket) {
  //sockets.on connection allows us to begin emitting events to the client
  //data is what is passed (published) from the mqtt client, whom is also on the topic (event) called `inTopic`
  socket.on('subscribe', function (data) { //data should be `hello mqtt` from client1.js
    //this is subscribing to the topic (event) and handling the event
    console.log('Subscribing to '+data.topic); //should say `Subscribing to inTopic`
    //socket.join(data.topic);
    client.subscribe(data.topic);//what client is this? mqtt?
  });
});

//listen to messages coming from the mqtt broker
client.on("message", function (topic, payload, packet) {
  sys.puts(topic+ "=" + payload);
  io.sockets.emit('mqtt',{'topic':String(topic),
    'payload':String(payload)});  //should be hello mqtt
})

//========================================================================================================

//initialize express
const PORT = process.env.PORT || 3001;
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//=======================================================================================================
//Middleware to enable passport-jwt authentication
//=======================================================================================================

//setup the mongoose connection
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mern-secure', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

//setup the middleware for morgan, express, and bodyParser
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));

//the middleware for the models
app.use('/api/book', book);
app.use('/api/auth', auth);

//=======================================================================================================
//Error Handling
//=======================================================================================================

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

//=======================================================================================================
//Turn the Server on
//=======================================================================================================


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
