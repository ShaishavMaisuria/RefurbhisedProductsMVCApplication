const model =require('../models/trade');

// GET /stories: send all stories
exports.index=(req,res)=>{

    
    // res.send(model.find());
    let trades=model.find();
    console.log(trades);
    res.render('./trade/trades',{trades});
    // res.send('send all trades');
};


exports.show=(req,res,next)=>{
    let id = req.params.id;
    let category= req.params.category;
    
    console.log("id "+id+"category"+category);
    let trade = model.findById(category,id);
    if(trade){
    res.send('trade id'+id);
    } else{
        let err = new Error('Cannot find a trade with id '+id);
        err.status=404;
        next(err);
    }
};


