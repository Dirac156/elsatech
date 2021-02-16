const express = require("express");

const app = express();

app.use(express.static("public"));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    res.redirect("/contact.html")
})

app.get('/index.html', function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.get('/about.html', function(req, res){
    res.sendFile(__dirname + "/about.html");
})

app.get('/product.html', function(req, res){
    res.sendFile(__dirname + "/product.html");
})

app.get('/contact.html', function(req, res){
    res.sendFile(__dirname + "/contact.html");
})

app.get("/register", function(req, res){
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("App is ruining");
})