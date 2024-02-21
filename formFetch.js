const express= require('express')

var app= express();

//var json= require('json')

app.get('/',function(req,res)
{
    res.send("start server")
})

app.get('/form', function(req,res)
{
    res.sendFile(__dirname+'/form.html', )
    
})


var bodyParser= require('body-parser')

var urlEncoded= bodyParser.urlencoded({extended:false})

app.post('/formFetch',urlEncoded,function(req,res){
    res.send("data submitted"+req.body.email+req.body.password+req.body.tel)
})

var server= app.listen(7004, function()
{
    var host = server.address().address   
    var port = server.address().port 
})