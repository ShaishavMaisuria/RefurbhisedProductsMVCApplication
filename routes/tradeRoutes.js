const express= require('express');
const controller= require('../controllers/tradeController');
const router = express.Router();

// GET /trades/ : send all stories

router.get('/',controller.index);



module.exports=router;