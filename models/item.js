const res = require("express/lib/response");
const { DateTime } = require("luxon");
const {v4:uuidv4} = require('uuid');

const trades={ 
   'Headphones': [
    {
        id:'1',
        name: 'Airpods',
        category: 'Headphones',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: 'available',
        image: 'airpodsMax.jpg',
        author: 'Shaishav  Maisuria',
        createOn: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        condition:'Used',
        cost: '9.99',
        company: 'apple'
    },
    {
        id:'2',
        name: 'Beats',
        category: 'Headphones',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: 'sale',
        image: 'beats.png',
        author: 'Tony Stark',
        createOn: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        condition:'New',
        cost: '0.99',
        company: 'Beats'
    },
    {
        id:'3',
        name: 'Airpods',
        category: 'Headphones',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: 'sale',
        image: 'airpodsMax.jpg',
        author: 'Shaishav  Maisuria',
        createOn: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        condition:'Used',
        cost: '9.99',
        company: 'apple'
    },
    {
        id:'4',
        name: 'Beats',
        category: 'Headphones',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: 'sale',
        image: 'beats.png',
        author: 'Tony Stark',
        createOn: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        condition:'New',
        cost: '0.99',
        company: 'beats'
    },
    {
        id:'5',
        name: 'Airpods',
        category: 'Headphones',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: 'sale',
        image: 'airpodsMax.jpg',
        author: 'Shaishav  Maisuria',
        createOn: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        condition:'Used',
        cost: '9.99',
        company: 'apple'
    },
    {
        id:'6',
        name: 'Beats',
        category: 'Headphones',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: 'sale',
        image: 'beats.png',
        author: 'Tony Stark',
        createOn: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        condition:'New',
        cost: '0.99',
        company: 'beats'
    }
],
'Laptop': [
    {
        id:'2.1',
        name: 'HP Nexus',
        category: 'Laptop',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: 'sale',
        image: 'lenovo.jpg',
        author: 'Shaishav  Maisuria',
        createOn: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        condition:'Used',
        cost: '9.99',
        company: 'HP'
    },
    {
        id:'2.2',
        name: 'ThinkPad',
        category: 'Laptop',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: 'sale',
        image: 'hp.jpg',
        author: 'Shaishav  Maisuria',
        createOn: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        condition:'Used',
        cost: '9.99',
        company: 'Lenovo'
    }
]};

exports.find=()=> trades;

exports.findById=(category,id)=> trades[category].find(trade=>trade.id===id);

exports.containsCategory=(category)=>{
  
    for(let val in trades){
        // console.log("value inside the loop "+val + " trades.length "+trades.category);
        if (val === category){
            return true;
        }
    }
    return false;
}
exports.save=function(trade){

    if(this.containsCategory(trade.category)){
    trade.id=uuidv4();
    trade.createdOn=DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    let productList=trades[trade.category];
    
    productList.push(trade);
    // trades[trade.category].push(trade);
    // console.log("trade Value from item.js"+trades.Laptop);
        
    }else{
        trade.id=uuidv4();
        trade.createdOn=DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
        trades[trade.category]=[trade];
        
    }
        
};

exports.deleteByCategoryID=function(category,id){
    // category=deleteTrade.category;
    if(this.containsCategory(category)){
        let index=trades[category].findIndex(trade=>trade.id===id);
        
        if(index!== -1){
            trades[category].splice(index,1);
            // console.log("trades delete" +trades);
            return true
        }

    console.log("trade Value from item.js"+trades);
        return false;
    }else{
        return false;
    }
        
};
//update manually check through inputs and from live form;
exports.updateByCategoryID=function(changedTrade,id){
    

    if(this.containsCategory(changedTrade.category)){
        let trade=trades[changedTrade.category].find(trade=>trade.id===id);

        if(trade){
            
        trade.name=      changedTrade.name;
        trade.category=   changedTrade.category;
        trade.details=    changedTrade.details;
        trade.status=     changedTrade.status;
        trade.image=      changedTrade.image;
        trade.author=      changedTrade.author;
        trade.condition=   changedTrade.condition;
        trade.cost=         changedTrade.cost;
        trade.company=      changedTrade.company;
           
            return true
        }

    // console.log("trade Value update not succesfulfrom item.js"+trades);
        return false;
    }else{
        return false;
    }
        
};