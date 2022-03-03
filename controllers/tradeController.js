const model =require('../models/item');

// GET /trades: send all stories main page of trades //name change
exports.index=(req,res)=>{
    let trades=model.find();
    console.log(trades);
    res.render('./trade/index',{trades});

};

// Each category trade.html, basically show all the trades inside the list
exports.show=(req,res,next)=>{
    let id = req.params.id;
    let category= req.params.category;
    let trade = model.findById(category,id);
    if(trade){
    res.render('./trade/trade',{trade});
    // console.log("trades................"+trade)
    } else{
        let err = new Error('Cannot find a trade with id '+id);
        err.status=404;
        next(err);
    }
};


// POST /trades: create a new story
exports.create=(req,res)=>{

    let trade = req.body;
    let category='Laptop';
    model.save(trade);
    res.redirect('/index');
    console.log("trades................"+trade)
};

exports.edit=(req,res,next)=>{

    let category=req.params.category;
    let id = req.params.id;
    
    let trade=model.findById(category,id);
    console.log("value********"+trade.category);
   if(trade ){
       console.log("hello");
    res.render('./trade/edit',{trade});
} else{
    let err= new Error("No trade was found that could be updates with id"+id);
    err.status=404;
    next(err);
}

// res.send("Hello");
};

//PUT: update the trade using id and changed id obtained from the trade
exports.update=(req,res,next)=>{

    let updatedTrade = req.body;
    let id = req.params.id;
    let category=updatedTrade.category;
   if( model.updateByCategoryID(updatedTrade,id)){
    res.redirect('/index/'+category+"/"+id);
} else{
    let err= new Error("No trade was found that could be updates with id"+id);
    err.status=404;
    next(err);
}
};
// Delete /trades: delete the trade using id and category
exports.delete=(req,res,next)=>{

    let id = req.params.id;
    let category=req.params.category;
   if( model.deleteByCategoryID(category,id)){
    res.redirect('/index');
   } else{
       let err= new Error("No trade was found that could be delete with id"+id);
       err.status=404;
       next(err);
   }
    
};

