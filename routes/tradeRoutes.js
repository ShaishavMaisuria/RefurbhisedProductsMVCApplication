const express= require('express');
const controller= require('../controllers/tradeController');
const router = express.Router();

// GET /trades/ : send all stories

router.get('/',controller.index);

router.get('/:category/:id',controller.show);


module.exports=router;