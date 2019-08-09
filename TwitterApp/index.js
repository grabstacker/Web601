console.log("The twitter bot is starting")
var Twit = require('twit')

var config = require('./config')
var T = new Twit(config)
  
console.log(config)

//This function gets a certain topic and runs a loop of the amount of top tweets to post 
//to the twitter account. It also posts to log to show what was posted locally
T.get('search/tweets', { q: 'bitcoin, craig wright since:2011-07-11', count: 100 }, function(err, data, response) {
    
    var tweets = data.statuses
    var postTweet
    for (let i = 0; i < 1; i++){ // <-- adjust this loop to control the amount of tweets to post
     postTweet = tweets[i].text
    console.log(postTweet)
    }

// posts the retrieved tweets to the twitter account
//Can put inside the for loop to send out multiple tweets but i think that might break it    
    T.post('statuses/update', { status: ' ' + postTweet }, function(err, data, response) {
        console.log(data)
      })
})

