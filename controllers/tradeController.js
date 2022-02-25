const model =require('../models/item');

// GET /stories: send all stories main page  //name change
exports.index=(req,res)=>{

    
    // res.send(model.find());
    let trades=model.find();
    console.log(trades);
    res.render('./trade/trades',{trades});
    // res.send('send all trades');
};

// Each category trade.html
exports.show=(req,res,next)=>{
    let id = req.params.id;
    let category= req.params.category;
    
    // console.log("id "+id+"category"+category);
    let trade = model.findById(category,id);
    if(trade){
    res.render('./trade/trade',{trade});
    } else{
        let err = new Error('Cannot find a trade with id '+id);
        err.status=404;
        next(err);
    }
};


// POST /stories: create a new story
exports.create=(req,res)=>{

    // res.send("create a new story");
    let story = req.body;
    let category='Laptop';
    model.save(story);
    
    // model.updateByCategoryID(story);
    
    res.redirect('/trades');
};



