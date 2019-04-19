const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// mongoAtlas key
const URL = 'mongodb+srv://heyrio:PASSWORD@cluster0-7cpbz.mongodb.net/test?retryWrites=true';


MongoClient.connect(URL,{useNewUrlParser: true},(error, client)=>{

    if(error){
        return console.log('Something went wrong couldnt connect to the database...')
    }

    console.log('Connected to database..');
})