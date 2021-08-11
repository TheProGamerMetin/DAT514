// require node modules we have installed on npm
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//middleware
app.use(express.json()); //packages the incomsing and outgoing data as json
app.use(express.urlencoded({
    extended: false
})); // monitors data incoming on the url

// this returns the message 'home page' when a get request is made to the server on / route
app.get('/', (req, res) =>{
    res.send('This is the home page')
})

// returns the message 'About Page' when a GET request is made to the Server on the /about route
app.get('/about', (req, res)=>{
    res.send('This is the about page');
})

// console logs data that arrives with the POST request being made to the /submit route
app.post('/submit', (req, res)=>{
    console.log(req.body.name);  // this is what you are getting from postman
    res.send('Success!')
})

// connect to local db called 'test'
mongoose.connect('mongodb://localhost:27017/test').then(()=> {
    console.log('successfuly connected'); // displays if connected successfully on MongoDB

})


// listening for requests on localhost:3000
app.listen(3000, ()=>{
    console.log('This Server is listening on Port 3000');
})