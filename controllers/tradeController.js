const model =require('../models/item');

// GET /stories: send all stories main page  //name change
exports.index=(req,res)=>{
    let trades=model.find();
    console.log(trades);
    res.render('./trade/index',{trades});
};

// Each category trade.html
exports.show=(req,res,next)=>{
    let id = req.params.id;
    let category= req.params.category;
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

    let trade = req.body;
    let category='Laptop';
    model.save(trade);
    res.redirect('/index');
};

// PUT /stories: create a new story
exports.update=(req,res,next)=>{

    let updatedTrade = req.body;
    let id = "2.2";
   if( model.updateByCategoryID(updatedTrade,id)){
    res.redirect('/index');
} else{
    let err= new Error("No trade was found that could be delete with id"+id);
    err.status=404;
    next(err);
}
};
// POST /stories: create a new story
exports.delete=(req,res,next)=>{

    let category='Laptop';
    let id = "2.2";
   if( model.deleteByCategoryID(category,id)){
    res.redirect('/index');
   } else{
       let err= new Error("No trade was found that could be delete with id"+id);
       err.status=404;
       next(err);
   }
    
};

