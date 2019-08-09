console.log("The twitter bot is starting")
var Twit = require('twit')

var config = require('./config')
var T = new Twit(config)
  
console.log(config)

T.get('search/tweets', { q: 'bitcoin, craig wright since:2011-07-11', count: 100 }, function(err, data, response) {
    
    var tweets = data.statuses
    var postTweet
    for (let i = 0; i < 1; i++){
     postTweet = tweets[i].text
    console.log(tweets[i].text)
    }
    T.post('statuses/update', { status: ' ' + postTweet }, function(err, data, response) {
        console.log(data)
      })
})


