//Browser Client MQTT over websockets (webpack environment)

var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://192.168.0.105");


    client.subscribe('inTopic');

    console.log("client publishing...");
    client.publish('inTopic', '1')
    
    client.end()



