
//Enable Serial debugging by uncommenting //#defin SERIAL_DEBUG in StandardFirmataWiFi
// (save a copy of StandardFirmataWiFi first)

// On startup (you may have to reset the ESP board because it starts up really fast
// view the Serial output to see the assigned IP address (if using DHCP)
// Or if you want to give the board a static IP (not use DHCP) then uncomment the
// following lines in wifiConfig.h and update to your chosen IP address:
// #define STATIC_IP_ADDRESS  10,0,0,17
// #define SUBNET_MASK        255,255,255,0 // REQUIRED for ESP8266_WIFI, ignored for others
// #define GATEWAY_IP_ADDRESS 0,0,0,0       // REQUIRED for ESP8266_WIFI, ignored for others



//====================================================================================================
//-------------------Node.js MQTT Broker Code---------------------------------------------------------
//====================================================================================================
//import mosca
var mosca = require('mosca');

//configure the pubsubsettings to work with mosquitto as the parent broker
var pubsubsettings = {
    type:"mqtt",
    json:false,
    mqtt: require("mqtt"),
    host:"test.mosquitto.org"
    //host:"broker.hivemq.com"
}

//pass the pubsubsettings to the mosca settings
var moscaSettings = {
    port:1883,
    backend: pubsubsettings
};

//pass the moscaSettings (and pubsubsettings) to the server
var server = new mosca.Server(moscaSettings);
server.on("ready", setup); //on init it fires up setup()

//fired when the mqtt server is ready to go
function setup() {
    console.log("Mosca server is up and running");
}


//====================================================================
//messages on broker to indicate what is going on between the clients
//====================================================================

//fired when a client connects
server.on('clientConnected',function(client){
    console.log('client connected', client.id);
});

//fired when a client disconnects
server.on('clientDisconnected', function(client) {
    console.log('client disconnected', client.id);
});

//fired when a message is published
server.on('published', function(packet, client) {
    console.log("Published", packet.payload);
});

//fired when a client subscribes
server.on('subscribed', function(topic, client) {
    console.log('subscribed: ' + topic + client.id);
});

//fired when a client unsubscribes from a topic
server.on('unsubscribed', function(topic, client) {
    console.log('unsubscribed: ' + client.id);    
});


//=======================================================

/*
client.on("connect", function(){
    client.subscribe("moisture_topic", function(err){
        if (!err){
            client.publish("moisture_topic", "hello Mqtt")
        }
    })
});

client.on("message", (topic, message) => {
    console.log("topic: ", topic)
    console.log("message: ", message)
});
*/