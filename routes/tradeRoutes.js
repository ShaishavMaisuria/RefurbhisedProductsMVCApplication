const express= require('express');
const controller= require('../controllers/tradeController');
const router = express.Router();

// GET /trades/ : send all stories

router.get('/',controller.index);

router.get('/:category/:id',controller.show);

// get from new trade
router.get('/newTrade',controller.new);

// post /trades: create new trade

router.post('/',controller.create);
module.exports=router;