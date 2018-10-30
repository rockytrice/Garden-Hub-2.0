const  express = require('express');
const bodyParser = require('body-parser');
const  http = require('http');
const app = express();
const morgan = require('morgan');
const mongoose = require("mongoose");
const socketIo = require("socket.io");
const mqtt = require("mqtt");
const moment = require("moment");
moment().format();
const router = require("./routes/router");
const cors = require("cors");

//booleran for auto mode
let auto_bool = false;

// Database setup===========================================================
mongoose.connect("mongodb://localhost/auth");
mongoose.Promise = Promise;
const db = require("./models/");
// App setup=================================================================
// middleware (morgan-logging framwork)
app.use(morgan("combined"));
app.use(cors());
// parse incoming request into json
app.use(bodyParser.json({ type: "*/*"}));
router(app);



// Server Setup
const PORT = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));




//this is the server-side mqtt client
const client = mqtt.connect(
  "mqtt://localhost",
  { port: 1883, clientId: "server-mqtt-client" }
);
const port = 5000;
const io = socketIo(server);
console.log("socket.io server listening on port ", port);

//=======================================================================================================


//======================================================database config with mongoose===============================================================//



/*//define the 'sensorData' database for MongoDB storage of all incoming sensor data
const MONGODB_URI = "mongodb://127.0.0.1:27017/SensorData";

//set mongoose to leverage built in Javascript ES6 Promise
mongoose.Promise = Promise;

//connect to Mongo DB
mongoose.connect(MONGODB_URI);
*/

//==================================================================================================================================================



//boolean for saving db data only once
let tempTopic = false;
function resetTemp(){
  tempTopic = false;
}
let moistTopic = false;
function resetMoist(){
  moistTopic = false;
}

//=============================Connect this server side MQTT Client to the Broker & setup Socket Server ==========================================//


client.on("connect", function() {

  console.log("MQTT server-side-client connected");

  //bind topicOfInterest to the topic the client is subscribing to
  var topicOfInterest = { temperature: 1, moisture: 1 };

  //subscribe with a QoS of 1, receive the message at least once
  var topicSubscribeOpts = {
    qos: 1
  };

  console.log(
    "MQTT server-side-client subscribing to the Sensor Data"
  );


  //subscribe the server-side client to the topics it needs then call the callback `onSubscribe` with `err` & `granted` as its parameters
  client.subscribe(topicOfInterest, topicSubscribeOpts, function onSubscribe(err, granted
  ) {
    if (err) {
      console.log("subscribe errors:", err);
    }

    if (granted) {
      //the broker returns a granted flag, use it to indicate if the subscribe was a success/failure
      console.log("subscribe granted:", granted); //'granted' will display the topics successfully accessed
    }
  });




  //=====================================Socket.io Client Connection Event Listener =============================================================//


  //this is a connection event listener, the socket (in the callback) is the 'server side websocket - socket - that can listen for and emit data
  //to the - socket - on the client side
  io.on("connection", socket => {

   

    //Relay ON Button Listener; listens for emited data from the client side - when user presses the button
    socket.on("btn", () => {

      console.log("//////////////ON COMMAND RECEIVED///////////////");

      //send the command to the irrigation controller
      client.publish("relay/control", "1");

    });

    //Realy OFF Button listener; listening for OFF command
    socket.on("btn2", () => {
      
      console.log("//////////////OFF COMMAND RECEIVED///////////////");

      //send the command to irrigation controller
      client.publish("relay/control", "2");

    });
    
    socket.on("btn3", () => {
      
      console.log("//////////////ON COMMAND RECEIVED///////////////");

      //send the command to irrigation controller
      client.publish("relay/control", "3");

    });

    socket.on("btn4", () => {
      
      console.log("//////////////OFF COMMAND RECEIVED///////////////");

      //send the command to irrigation controller
      client.publish("relay/control", "4");

    });

    /*socket.on("btn5", () => {
      
      console.log("//////////////ON COMMAND RECEIVED///////////////");

      //send the command to irrigation controller
      client.publish("relay/control", "5");

    });

    socket.on("btn6", () => {
      
      console.log("//////////////OFF COMMAND RECEIVED///////////////");

      //send the command to irrigation controller
      client.publish("relay/control", "6");

    });

    socket.on("btn7", () => {
      
      console.log("//////////////ON COMMAND RECEIVED///////////////");

      //send the command to irrigation controller
      client.publish("relay/control", "7");

    });

    socket.on("btn8", () => {
      
      console.log("//////////////OFF COMMAND RECEIVED///////////////");

      //send the command to irrigation controller
      client.publish("relay/control", "8");

    });*/

    //Switch control of relay to auto mode
    socket.on("auto", () => {
      if(auto_bool === false){
        //if auto_bool is currently false switch it to true (off/on)
        auto_bool = true;
        console.log(`AUTO MODE IS: ${auto_bool}`);
      }
      else{
        //if auto_bool is currently true switch it to false (on/off)
        auto_bool = false;
        console.log(`AUTO MODE IS: ${auto_bool}`);
      }
    })

    /*
    socket.on("allOn", () =>{
      client.publish("relay/control", "A")
      console.log("All realys ON");
    })

    socket.on("allOff", () =>{
      client.publish("relay/control", "B");
      console.log("All relays OFF");
    })*/

    
    // fired when a message is received on one of the subscribed topic; notice this event handler is outside of the on_connect event handler
    client.on("message", function(topic, message, packet,) {

      //grab the message packet payload and bind it to the varaible payload; e.g. "temperature: 32.5"
      
      //log that the message has been received
      console.log("\n\n#########################################");
      console.log("MQTT client received message");
      console.log(" * topic:", topic," * message: ",message," * message (stringified)", JSON.stringify(message)," * packet", packet);
      console.log(" * payload (unpacked)", packet.payload.toString("utf8")); //notice: packet.payload must be selected and converted to a 'utf8' string; protocol rules

    
      //========================Emit the Sensor Data to the Realtime Display on the Front-End Dashboard=====================================//

      //grab the payload from the receieved message
      let payload = packet.payload.toString("utf8");
      
      if (topic.toString("utf8") === "temperature"){
        socket.emit("temperatures", payload);
        if(tempTopic === false) {
          tempTopic = true;
          console.log("TEMPERATURE REALTIME TO DASHBOARD: " + payload);
          saveTemperatureData();
          socket.emit("temperatures", payload);
          setTimeout(resetTemp, 3000);
        }

        else if(topic.toString("utf8") === "temperature" && tempTopic === true){
          return
        }

      } 

      if (topic.toString("utf8") === "moisture"){

        socket.emit("moistures", payload );

        if (auto_bool === true){

          //NOTE: if the moisture drops below 50% the pump will come on and reamin on (could set max timeout) till the moisutre is at 80%, then it will shut off again
          //From this point, it will not turn on again until it reaches the level of 50% again. 
          //NOTE: when activated auto mode will override manual commands till auto mode is toggled off again

          console.log('Watering your Plant(s)')
          if(payload < 50){
            //the soil is at the bottom of the moist scale and top of the dry, turn on pump 5 seconds
            client.publish("relay/control", "1");//turn on the pump 
            //setTimeout(cutOFF, 5000); //turn back off in 5 seconds
          }
          else if(payload >= 80){
            client.publish("relay/control", "2");//once the soil near the top(where the sensor is) has reached 80% moisture, turn off the pump
          }
        }
      
        if( moistTopic === false) {
          moistTopic = true;
          console.log("MOISTURE REALTIME TO DASHBOARD:"+payload)
          saveMoistureData();
          setTimeout(resetMoist, 3000);
        }
        else if(moistTopic === true){
          return
        }
    }
  

       /*//auto mode function only runs as long as auto_bool is true
       if(topic.toString("utf8") === "moisture"){
        console.log('IS THIS COMING IN OR NOT?')
        if (auto_bool === true){
          switch (payload){
            case (parseInt(payload) < 50) : //%50 percent from the sensor is actually very low moisture - nearly dryish soil
              client.publish("relay/control", "1");//turn on the pump 
              setTimeout(cutOFF, 5000); //turn back off in 5 seconds
              break;
          }
        }
      }*/

      /*const handleTemp = () => {
        //const demoArray =['25','25','24','26.5'];
        //socket.emit("tempGraph", demoArray );
        socket.emit("temperatures", payload);
        //socket.emit("moistures", `moisture level: ${payload} %`);
        saveTemperatureData();
        //do this just for now
        //saveMoistureData();
        tempMessage = false; //reset temp message for next incoming message in about 20 seconds       
      }

      
      if (topic.toString("utf8") === "temperature" && tempMessage === false) { //if this is the first temp message received since the handleTemp was last called
        tempMessage = true;//lock out this if statement from being called again till the settimeout function is fired in  3 seconds
        //save the data and emit the data after three seconds, then we know it won't tripple save data or send it
        setTimeout(handleTemp, 2000);
      }*/

      //==============================================Function to Save Sensor Data========================================================//

      function saveTemperatureData() {
        //save the sensor data to mongoDB with a timestamp
        //grab current moment since 1970 epoch
        var time = moment();

        //convert to our timezone GMT-4
        var timestamp = time.subtract(4, "hours"); 

        //Format the timestamp date with momemntjs' format method
        var _timestamp = moment(timestamp).format("YYYY-MM-DDTHH:mm:ss");

        //grab all the recorded tempertaures from 5 minutes prior till now
        var query = timestamp
          .subtract(5, "minutes")
          .format("YYYY-MM-DDTHH:mm:ss");

        //create a new temperature document with the latest temperature reading
        db.Temperature.create({ temp: payload, time: _timestamp })
          .then(dbData => {
            console.log("***Temperature Collection Updated***");
          })
          .catch(err => {
            console.log("hello there was an error");
          });

        //now query the just updated databse for the temperature readings within the last 5 minutes
        db.Temperature.find({
          time: {
            $gte: query
          }
        })
          .then(dbData => {
            //send the temperature data as a JSON object to the client side to be passed to the Chartjs line chart

            //target each element in the dbData array and load only the temperature readings into a new array and send it to the client side
            var tempR = [];
            dbData.forEach(function(e) {
              tempR.push(e.temp)
            });

            console.log(tempR);

            //socket.emit("tempGraph", tempR);
          })
          .catch(err => {
            console.log(err);
          });
        
      }
      
      function saveMoistureData() {
        //save the sensor data to mongoDB with a timestamp
        //grab current moment since 1970 epoch
        var time = moment();

        //convert to our timezone GMT-4
        var timestamp = time.subtract(4, "hours"); 

        //Format the timestamp date with momemntjs' format method
        var _timestamp = moment(timestamp).format("YYYY-MM-DDTHH:mm:ss");

        //grab all the recorded tempertaures from 5 minutes prior till now
        var query = timestamp
          .subtract(5, "minutes")
          .format("YYYY-MM-DDTHH:mm:ss");

        //create a new temperature document with the latest temperature reading
        db.Moisture.create({ moisture: payload, time: _timestamp })
          .then(dbData => {
            console.log("***Moisture Collection Updated***");
          })
          .catch(err => {
            console.log("hello there was an error");
          });

        //now query the just updated databse for the temperature readings within the last 5 minutes
        db.Moisture.find({
          time: {
            $gte: query
          }
        })
          .then(dbData => {
            var moistureR = [];
            dbData.forEach(function(e) {
              moistureR.push(e.moisture)
            });

            console.log(moistureR);
          })
          .catch(err => {
            console.log(err);
          });
        
      }

      //=============================================function to automate plant watering=================================================//

      function cutOFF () {
        client.publish("relay/control", "2");
      }

     

  
    });
  });
});

//========================================================================================================

//initialize express

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
