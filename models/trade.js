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
        status: 'sale',
        image: '/images/airpodsMax.jpg',
        author: 'Shaishav  Maisuria',
        createOn: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        condition:'Used',
        cost: '9.99'
    },
    {
        id:'2',
        name: 'Beats',
        category: 'Headphones',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: 'sale',
        image: '/images/beats.png',
        author: 'Tony Stark',
        createOn: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        condition:'New',
        cost: '0.99'
    },
    {
        id:'3',
        name: 'Airpods',
        category: 'Headphones',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: 'sale',
        image: '/images/airpodsMax.jpg',
        author: 'Shaishav  Maisuria',
        createOn: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        condition:'Used',
        cost: '9.99'
    },
    {
        id:'4',
        name: 'Beats',
        category: 'Headphones',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: 'sale',
        image: '/images/beats.png',
        author: 'Tony Stark',
        createOn: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        condition:'New',
        cost: '0.99'
    },
    {
        id:'5',
        name: 'Airpods',
        category: 'Headphones',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: 'sale',
        image: '/images/airpodsMax.jpg',
        author: 'Shaishav  Maisuria',
        createOn: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        condition:'Used',
        cost: '9.99'
    },
    {
        id:'6',
        name: 'Beats',
        category: 'Headphones',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: 'sale',
        image: '/images/beats.png',
        author: 'Tony Stark',
        createOn: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        condition:'New',
        cost: '0.99'
    }
],
'Laptop': [
    {
        id:'2.1',
        name: 'HP',
        category: 'Laptop',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: 'sale',
        image: '/images/lenovo.jpg',
        author: 'Shaishav  Maisuria',
        createOn: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        condition:'Used',
        cost: '9.99'
    },
    {
        id:'2.2',
        name: 'HP',
        category: 'Laptop',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: 'sale',
        image: '/images/hp.jpg',
        author: 'Shaishav  Maisuria',
        createOn: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        condition:'Used',
        cost: '9.99'
    }
]};

exports.find=()=> trades;

exports.findById=(category,id)=> trades[category].find(trade=>trade.id===id);

exports.save=function(trade){
    trade.id=uuidv4();
    trade.createdOn=DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    trades.push(trade);
};