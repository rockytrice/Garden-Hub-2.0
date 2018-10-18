const  express = require('express');
const bodyParser = require('body-parser');
const  http = require('http');
const path = require("path");
// import favicon from "serve-favicon";
const morgan = require("morgan");
const app = express();
const router = require("./routes/router");
const mongoose = require("mongoose");

// Database setup===========================================================
mongoose.connect("mongodb://localhost/auth");


// App setup=================================================================
// middleware (morgan-logging framwork)
app.use(morgan("combined"));
// parse incoming request into json
app.use(bodyParser.json({ type: "*/*"}));
router(app);



// Server Setup
const PORT = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(PORT);
console.log("Server Listening on", PORT);


const sys =require('sys');

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
  puts(topic+ "=" + payload);
  io.sockets.emit('mqtt',{'topic':String(topic),
    'payload':String(payload)});  //should be hello mqtt
})

//========================================================================================================

//initialize express


app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//=======================================================================================================
//Middleware to enable passport-jwt authentication
//=======================================================================================================

//setup the mongoose connection
// Promise = require('bluebird');
// mongoose.connect('mongodb://localhost/auth', { promiseLibrary: require('bluebird') })
//   .then(() =>  console.log('connection succesful'))
//   .catch((err) => console.error(err));

// // setup the middleware for morgan, express, and bodyParser
// app.use(logger('dev'));
// app.use(json());
// app.use(urlencoded({'extended':'false'}));
// app.use(static(join(__dirname, 'build')));

