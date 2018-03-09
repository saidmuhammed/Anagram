

var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose")
    
mongoose.connect("mongodb://localhost/yelp_camp",{useMongoClient: true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");


//Schema setup
var campgroundSchema= new mongoose.Schema({
    name: String,
    image: String
});

var Campground=mongoose.model("Campground",campgroundSchema);
    
    
app.get("/",function(req,res){
    res.render("landing")
    
});



app.get("/campgrounds",function(req,res){
    
    Campground.find({},function(err,allCampgrounds){
        if(err){
            console.log(err);
        }else
            {
                res.render("campgrounds",{campgrounds:allCampgrounds});        
            }
        
    });
    
    
    
});


app.get("/campgrounds/new",function(req,res){
        res.render("new");
    });



app.post("/campgrounds",function(req,res){
    
    console.log("v2"); //This was just here to test
    var name=req.body.name;
    var image=req.body.image;
    var newCampground= {name: name, image: image};
    // campgrounds.push(newCampground);
      Campground.create(
                      newCampground
                     ,function(err,campground){
                            //   console.log("Test");
                            if(err)
                                {
                                    console.log("SOMETHING VERY BAD HAPPENED HERE.");
                                    console.log(err);
                                }
                            else
                                {
                                    res.redirect("/campgrounds");   
                                }
                       
                      });
 
    
    
});



    app.listen(process.env.PORT,process.env.IP,function(){
    
    console.log("The v3 YelpCamp Server Has Started!!!");
    
});



