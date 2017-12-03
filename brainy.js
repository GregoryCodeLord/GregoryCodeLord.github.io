// Connect to deepstreamHub
var client = deepstream('wss://154.deepstreamhub.com?apiKey=632e26ce-715f-4b17-9ea9-23486df36622')

// Login
client.login()

var record = client.record.getRecord('dsh-demo/bouncy-ball')
emitInterval = setInterval(function() {
  record.set({
    position: {
      x: Math.round(Math.random() * 100),
      y: Math.round(Math.random() * 100)
    },
    color: ['lightblue', 'lightseagreen', 'lightgreen'][Math.floor( Math.random() * 3 )],
    shape: ['circle', 'square'][Math.floor( Math.random() * 2 )]
  })
}, 1000)
  