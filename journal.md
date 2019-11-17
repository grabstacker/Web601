Will need to pull all my journal entries into this document. 

A commit from local git laptop





Class Javascript vars functions and gates (Not sure which week) <-- need to org

This class we talked about logic gates functions and variables
You call a function by its name 
function myFunction(){
    console.log("Message");
}

myFunction() <--- this is calling the function

we also talked about association and reserved words in Javascript
function addition(a,b) for example
const doesnt change let can

Ali also talked about our wireframes and website.

talked about order of which the variables are added as the program runs
asynchronous order

installed npm package twit to follow a tutorial on adding outside module and creating a package.json file 
Commands used

npm init
npm install twit --save

I also uninstalled the package as i forgot to add the save tag so tha tis usefull

npm -h <-- used to find the unistall commands
 
***TwitterApp***

Created a twitter bot that posts custom search tweets to a twitter account i created. in the TwitterApp folder

***Class Wednesday 14th aug ***
installed express and looking into importing node modules into our temp projects with npm and express defualt project templates

***Project Wireframe and Idea***
I have created a wireframe inside ./WireframeImgs/ that sets out the template css design and colour pallete that will be used in the project. 
This template will be consistant throughout the website having the content area adjusted for columns to accomodate the different pages in the website.

The idea for the website is to build custom api calls to different cryptocurrency platforms. I will have a series of drop down boxes 
selecting which platform to make a query on and then the different options to create a call to that api and display
 the output of that api call on screen, then a place to copy the code that was generated to make that call if the user wants to use it in another application. The basic summary is a place to generate and create API calls to a selection of platforms for the user to customise.

Additional refinement of the wireframes of each page will be added and a discussion with Ali about the technicalities involved in creating this project will be orgranised to confirm details


***Class 16/08/19***
each page has its on express logic behind it

Require
const require = require('express')

Middleware
To make sure the below understands what the code below is calling


app.use('table',function(req,res,next))

app.use('table'(req,res,next) =>{
var booking = req.booking
var age =  req.age
if (booking && age){
next();
}});

Routes
app.get('/table/:amount',function(req,res) =>+{
var dinner = req.params.amount
res.send('looking for table'+ dinner)
})

Params is looking like this 
req {params:{amount:4}}

FLOW OF PROGRAM

Customer -> Middleware -> Middleware -> Response
table 2 ->  booking,age->  table 4 ->  message''
     ^       app.use();    app.get()    res.send() |
     <----------------------------------------------

const express = require('express')
const tableRoute = express.Router()
tableRoute.use(function(req,res,next)){
    var booking = req.booking
    var age = req.age
    if(booking && age){
        next();
    }
}


// reusing tableRoute to apply the same rules to the Bar
tableRoute.use('/bar',function(req,res,next)){

    var age = req.age;
    if (age >= 18){
        next();
    }
}


Application
app.listen(3000){
    console.log('Running port 3000')
} <--listens on the port for requests

codeacademy react1 and 2
and look at gitbook updated


******************Website Breakdown and Meeting with Ali********************
Have discussed the project idea with ali and will start research on implementation
of the different main elements that are required to make it work.
Using an user interface to react with the input and output on the http request to the
api I can list the requirements of the query to the user and take the custom commands
from the form to inject into the url construction. 

Node.js has an libary called SuperAgent
which accepts the input of query() which I can use to pass custom calls to different APIs.
All though there are several different options available this one seems to fit the best
for my usecase.

I have installed this to my test directory to look around through the code and readme file
with the below module install command.

npm install superagent

const superagent = require('superagent');

superagent.get('https://api.nasa.gov/planetary/apod')
.query({ api_key: 'DEMO_KEY', date: '2017-08-02' })  <---- This is where the custom calls are made.
.end((err, res) => {
  if (err) { return console.log(err); }
  console.log(res.body.url);
  console.log(res.body.explanation);
});

This query can be run in browser to be tested in a section that displays output below 
where the user customises the API request and can save the query to their account for
returning users.

What would be great is to figure out a way in order to automatically handle any API that
is say added to the website by a user requesting to submit their api to be publically useable
and accessable in order to expand the websites API options immensley. (that may be outside
of the scope of this course though) 
****Possible identification of certain common api call and variable inputs will have to be looked into
aswell as how the url is constructed compared to other api applications

A user will be able to log into the website and access previous saved queries and export
thoughs queries externally for use elsewhere, maybe another application for example.

Using request Promise to access the CoinMarketCap API

npm install --save request
npm install --save request-promise

reuest must be installed first followed by request-promise

*********SandBox Node.js API request call for testing the account works**********

const rp = require('request-promise');
const requestOptions = {
    method: 'GET',
    uri: 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/info',
    qs: {
        'symbol': 'BTC'
    },
    headers: {
        'X-CMC_PRO_API_KEY': 'ec9fe84b-fe7c-4d71-8aea-154b9acc0bca'
    },
    json: true,
    gzip: true
};

rp(requestOptions).then(response => {
    console.log('API call response:', response);
}).catch((err) => {
    console.log('API call error:', err.message);
});

********RUN AND RETURN RESULTS*******

$ node coinMarketCapAPI.js
API call response: { status:
   { timestamp: '2019-08-16T13:38:26.673Z',
     error_code: 0,
     error_message: null,
     elapsed: 4,
     credit_count: 1 },
  data:
   { '1':
      { urls: [Object],
        logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
        id: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
        slug: 'bitcoin',
        description:
         'Bitcoin (BTC) is a consensus network that enables a new payment system and a completely digital currency. Powered by its users, it is a peer to peer payment network that requires no central authority to operate. On October 31st, 2008, an individual or group of individuals operating under the pseudonym "Satoshi
Nakamoto" published the Bitcoin Whitepaper and described it as: "a purely peer-to-peer version of electronic cash, which would allow online payments to be sent directly from one party to another without going through a financial institution."',
        notice: null,
        date_added: '2013-04-28T00:00:00.000Z',
        tags: [Array],
        platform: null,
        category: 'coin' }





************ IDEA i may create a form to submit API urls and the different commands and directorys that can be accessed. This may be a good
option as the dynamic processing of an API may be to complex to implement in this project. That way new APIs
can easily be setup and configured.***********

*****Another idea: If i could find a directory tree some how of all the possible urls from the api and the different commands 
this could be filtered into a data structure in order for the user to find their way to the endpoint of the API call through
drop down menus that autopopulate the next parameters that are options in that area of the directory. There might be a module that can request
this data or automatically fetch it so i can process routes in the API request generation****** 


Found NPM module https://www.npmjs.com/package/@octokit/endpoint which can possibly help me filter the urls into automatic options on
the form so no setup of a new API is required. dynamically generating menu options.
An API url can be entered by anyone and once added generates a menu tree based off the url structure and commands at the endpoints that
are available. 
This way each user has his own private set of querys as apposed to the public list that can be used by anyone.

Only a list of the possible endpoints is needed. The menu will have the url displayed but you must select an endpoint to make a call to
the api on. Once the Endpoint is selected, the list of possible commands are displayed for that endpoint which can be entered into the
input box. Going through a menu path as the opposite option means going through directories without seeing the options after that directory
level that is currently being viewed. This could be detrimental to the user making the correct choice and should be bypassed by a selection
shortcut to the endpoint. 

Because each endpoint URL has many options with the commands displaying this is going to have to be quick to enable the user to see all 
possible options fast enough to be effecient. As the user moves the mouse over the different end points the list of commands for that
endpoint are instantly displayed in a seperate coloumn box that can be clicked and selected to add to the api call. 

This will concatenate onto the query being created along with the custom input the user enters. 
Possible endpoint filtering of urls could be feed into an list or dictionary that stores a string value of that directory API url. 
When the user selects a radio button or checkbox of the endpoint the string is passed to the display field and the query is finished by the user then
sent to the superagent module to be run (not sure if i still need superagent if the call is being completly constructed in the previous
steps? All though the command options could be passed seperatly to super agent aswell rather than being concatenated before hand). 
The module returns the data and is displayed on screen along with a button to "Save this query" which
will be tied into the dictionary of saved api calls for each user in their private account.

API Keys
When a user creates a new query there will be an option to enter the api key in a seperate box. This will be passed to superagent along with the commands
as the previous idea only constructs the url and does not attach a apikey. and creating a fully constructed url instead of only passing the directory
may disrupt how superagent works. Will have to look into this a bit more.

I may not need superagent. Is there any benefit over using super agent as apposed to request-promise for passing the request and returning results?
. Will look into this more. but i think superagent might have nicer formatting cababilities for output.

**********CODE SNIPPET*******************
I dont think ill need this but im saving it here in case.

const { endpoint } = require("@octokit/endpoint");
const request = require("request");
const myProjectEndpoint = endpoint.defaults({
  baseUrl: "https://github-enterprise.acme-inc.com/api/v3",
  headers: {
    "user-agent": "myApp/1.2.3"
  },
  org: "my-project"
});
const requestOptions = myProjectEndpoint("GET /orgs/:org/repos", {
  headers: {
    authorization: "token 0000000000000000000000000000000000000001"
  },
  org: "octokit",
  type: "private"
});

var myVar = request(requestOptions.url);

************************************************************************************

Have started working on npm install --save resource-path
Seems it has better capabilities in dealing with api endpoints

********************Class 21/08/2019**************************

https://google.com/#q=express
http://www.yahoo.com/search?q=ali&first=3 <-- sub domain is www
http://localhost:4200/home?test=1#history

port needs to be above 1023 as below is reserved

protocol = https:
host = google.com , http://8.8.8.8:1234
port = 4200 <-- each server has a port for your installation
path = home
querystring = ?q=ali&first=3 
fragment (hash) = #history

HTTP Request methods

---request headers---
app.get('/headers',function(req,res)){
    res.set('Content-Type','text/plain')
    var s = ''
    for(var name in req.headers) s += ':' + req.header[name]
    res.send(s)
})

Request Object

req.params
req.query
req.body
req.route <-- need to look into this a bit more
req.headers

Response Object
res.status() <-- 200 is ok <-- 404 page not found <-- 500 server error
res.json() or res.json(status, json)

How the internet works for developer video

minified -min.js is a compression thingy for .js speed
browser requests
assests are files .js .html etc etc

*********GET POST PUT DELETE <-- how the data is passed around the servers with requests

FRIDAY CLASS --> setup enviroment, 
talk about react and install react boilerplate, 
talk about JSX and webpack,
Then use components
Routers
CSS styles
3rd party packages
NPM packages
Folder structure

**********PROJECT UPDATE CHANGING PATH************************

I have decided after all of the above research that handling API urls
dynamically is possible but probly outside of the scope of this course and
a bit to complex. I have learnt alot about apis and interactions but amount
changing paths in my project design

The project will now be focused and based around a single api from the Opacity.io API

Opacity is a file storage service that has an public api that does not require access tokens
for getting files from the servers.
I will utilize this to create a image sharing website like imgur.com.
The user can add images to the website in the public area and save image list in thier private account 

https://www.opacity.io/share#handle=2a556bc6602190f712d749f274effb4f0

the above is a shortened (and not working because of that i shortended the handle) version of
format of a file. The project will have a section to submit and share these files to a public list

this list will be able to be sorted into different categories for example "memes" "nature" "cars"
and the submission form will accomodate this categorization.
The images are displayed randomly on the front page and can be sorted as a preference aswell.
The user can download the file after seeing it presented in the browser as a viewable image.

The user can also log in and save thier own list of public handles to access later.
As the format of the handle is based around the encrypted public file handle, this
is all i will need to store in a db to link the file. The stored handle will be the unique
id KEY along side a title and description and some meta data about the file size and creation date etc.

A rating system would be a nice feature that enables the logged in accounts to upvote images in thier
respective categories to be sorted by rank. I dont know if i will implement this unless i have time.

I will change the wireframe to accomodate the new design.

**** Idea. Have the navigation as a checkbox style that adds different components to the screen so the user
can completely customise what functions they want to access. The nav buttons stay indented and the content
loads into the same screen. Clicking it again returns the button to its normal poped out state and the content
disapeers
