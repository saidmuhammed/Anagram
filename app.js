

var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    //anagram   = require("anagram")
    anagramica  = require('anagramica')
    
    
//mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

//Anagram Engine

// anagram.init('./words/words.js', function(err) {
//     if (err) throw err;
//     anagram.findAnagrams('dog', function(err, anagrams) {
//     	console.log('`%s`: found %d anagrams', anagrams.input, anagrams.count);
//     	console.log(anagrams);
//     });
// });





//
    
    
app.get("/",function(req,res){
    res.render("newsearch")
    
});





    app.post("/results",function(req,res){
        
        var word=req.body.searchword
         
        
        anagramica.all(word, function(error, response) {
                if (error) {
                    throw error;
                }
     
                console.log(response)            
                var anagrams=response
                //res.redirect("/results")
        });
        
          
         
         
        
        });
    
    
    
        app.listen(process.env.PORT,process.env.IP,function(){
        
        console.log("The Anagram Server Has Started");
        
    });



