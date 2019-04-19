const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//Database modules

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// Name of the collection
const collection = 'Winners'

// mongoAtlas key
const URL = 'mongodb+srv://heyrio:password@cluster0-7cpbz.mongodb.net/test?retryWrites=true';


//middleware to parse the data
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

//directory for static files
app.use(express.static(path.join(__dirname, '/public')))


// template engine

app.set('view engine', 'hbs');



app.get('/',(req, res)=>{

    res.render('index');
})

app.get('/home', (req, res)=>{
    res.render('home');
})


app.get('/winner',(req, res)=>{

    res.render('winner');

});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////// DATA BASE STUFF ///////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Connects to mongo Atlas
// contains all post requests
MongoClient.connect(URL,{useNewUrlParser: true},(error, client)=>{

    if(error){
        return console.log('Something went wrong couldnt connect to the database...')
    }
    const db = client.db(collection);

    // Lets you store youre name in the winner page
    app.post('/winner',(req, res)=>{
        var userName = req.body.name
        db.collection('User').insertOne({ name: userName });
        res.render('winner')
    })
    // querys the database of all game winners
    app.get('/score',(req, res)=>{
        db.collection('User').find({}).toArray((error, data)=>{
            if(error){
                throw Error
            }
            var winners = [];
            for(var i = 0; i <data.length; i++){
                winners.push(data[i].name)
            }
            res.render('score', {
                winners: winners 
            });     
        })     
    });
    console.log('Connected to database..');
})

app.listen(3000,()=>{
    console.log('Server is running...');
})