var express = require("express");
var app = express();
var bodyParser = require ("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Camp Onowana", image:"https://pixabay.com/get/ea32b6062afc013ed1584d05fb1d4e97e07ee3d21cac104491f3c77ca1ecb2bb_340.jpg"},
    {name: "Hogwarts Pass", image:"https://pixabay.com/get/eb3db30a29fd063ed1584d05fb1d4e97e07ee3d21cac104491f3c77ca1ecb2bb_340.jpg"},
    {name: "Broken Rock", image:"https://farm4.staticflickr.com/3178/2386126905_4d131dbb11.jpg"},
]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});


app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(3000, function(){
    console.log("Yelp Camp has started!");
});