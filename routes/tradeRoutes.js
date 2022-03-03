// contains all the trade site routes
const express= require('express');
const controller= require('../controllers/tradeController');
const router = express.Router();
//Trade Navigation
// GET /trades/ : send all stories

router.get('/',controller.index);
router.post('/',controller.create);
router.get('/:category/:id',controller.show);


router.get('/:category/:id/edit',controller.edit)
// post /trades: create new trade Request coming from submitting the new trade form



router.put('/:category/:id',controller.update);

router.delete('/:category/:id',controller.delete);
module.exports=router;