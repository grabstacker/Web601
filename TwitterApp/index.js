console.log("The twitter bot is starting")
var Twit = require('twit')

var config = require('./config')
var T = new Twit(config)

//console.log(config)

//This function gets a certain topic and runs a loop of the amount of top tweets to post 
//to the twitter account. It also posts to log to show what was posted locally
function tweetIT() {
    T.get('search/tweets', { q: 'bitcoin, since:2011-07-11', count: 100 }, function (err, data, response) {

        var tweets = data.statuses
        var postTweet
        var screen_name
        for (let i = 0; i < 1; i++) { // <-- adjust this loop to control the amount of tweets to post
            postTweet = tweets[i].text
            screen_name = data.statuses[i].user.screen_name;
        }
        //Automatically follows the user that the tweet is sourced from



        T.post('friendships/create', { screen_name }, function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(screen_name, ': **FOLLOWED**');
            }
        })

        //posts the tweet that is T.get
        T.post('statuses/update', { status: ' ' + postTweet }, function (err, data, response) {
            if (err) {
                console.log("\nSomthing went wrong! : " + err + '\n')
            } else {
                console.log("\nIt worked Tweet has been sent: \n\n")
            }
            console.log(postTweet)
        })
    }
    )
}



setInterval(tweetIT, 1000 * 180) //sets the interval for searching and posting the tweet
tweetIT()
