console.log("The twitter bot is starting")
var Twit = require('twit')

var config = require('./config')
var T = new Twit(config)
  
console.log(config)

T.get('search/tweets', { q: 'craig wright since:2011-07-11', count: 100 }, function(err, data, response) {
    
    var tweets = data.statuses
    for (let i = 0; i < 2; i++)
        console.log(tweets[i].text)
})
