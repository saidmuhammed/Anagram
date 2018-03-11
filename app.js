

var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose")
    
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");


//Schema setup
var wordSchema= new mongoose.Schema({
    name: String,
    image: String
});

var Word=mongoose.model("Word",wordSchema);
    
    
app.get("/",function(req,res){
    res.render("newsearch")
    
});



app.get("/searchpage",function(req,res){
    
   Word.find({},function(err,allCampgrounds){
        if(err){
            console.log(err);
        }else
            {
                res.render("campgrounds",{campgrounds:allCampgrounds});        
            }
        
    });
    
    
    
});


// app.get("/searchpage/new",function(req,res){
//         res.render("new");
//     });



app.post("/campgrounds",function(req,res){
    
    console.log("v2"); //This was just here to test
    var name=req.body.name;
    var image=req.body.image;
    var newCampground= {name: name, image: image};
    //Words.push(newCampground);
     Word.create(
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



