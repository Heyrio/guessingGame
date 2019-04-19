const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();


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

app.get('/score',(req, res)=>{

    res.render('score');

});

app.get('/winner',(req, res)=>{

    res.render('winner');

});


app.listen(3000,()=>{
    console.log('Server is running...');
})