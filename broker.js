//setup a mosca broker to use the test.mosquitto.org public broker
const mosca = require('mosca');

console.log('MQTT broker is starting...');

const pubsubsettings = {
    type: 'mqtt',
    json: 'false',
    mqtt: require('mqtt'),
    host: 'iot.eclipse.org',
};

const inMemoryBrokerSettings = {
    port: 1883,
    persistence:mosca.persistence.Memory,
    //backend: pubsubsettings
}

const brokerSettings = inMemoryBrokerSettings;

const server = new mosca.Server(brokerSettings, function onCreated(err, broker){
  //assume no errors

  console.log('MQTT broker is up and running');
});

server.on('ready', setup);


function setup() {
    console.log('Mosca server is up and running on port ' + inMemoryBrokerSettings.port);
}



server.on('clientConnected', function(client) {
    console.log('MQTT client connected, id', client.id);
  });

  server.on('clientDisconnected', function(client) {
    console.log('MQTT client disconnected, id', client.id);
  });

  server.on('published', function(packet, client) {
    console.log('MQTT broker detected a published message');
    //console.log(' * packet:', packet);
    console.log(' * packet payload:', packet.payload.toString());
    if(packet.payload === '{"clientId":"subcribing-client","topic":"broker/someTopic"}'){
    console.log(`it's a mathch!!!`);
    }
    if(packet.payload === '{"clientId":"publishing client","topic":"broker/someTopic"}'){
    console.log(`it's a mathch!!!`);
    }
  });

  /*server.on('subscribed', function(topic, client) {
    console.log('subscribed: ' + client.id);
  });*/

  /*server.on('unsubscribed', function(topic, client) {
    console.log('unsubscribed: ' + client.id);    
  });*/