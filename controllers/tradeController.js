const model =require('../models/trade');

// GET /stories: send all stories
exports.index=(req,res)=>{

    
    // res.send(model.find());
    let trades=model.find();
    console.log(trades);
    res.render('./trade/trades',{trades});
    // res.send('send all trades');
};



