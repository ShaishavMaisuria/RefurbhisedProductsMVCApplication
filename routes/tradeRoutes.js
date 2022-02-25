const express= require('express');
const controller= require('../controllers/tradeController');
const router = express.Router();
//Trade Navigation
// GET /trades/ : send all stories

router.get('/',controller.index);

router.get('/:category/:id',controller.show);

// post /trades: create new trade Request coming from submitting the new trade form

router.post('/',controller.create);
module.exports=router;