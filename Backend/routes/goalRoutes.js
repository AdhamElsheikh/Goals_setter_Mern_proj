const express = require ('express')
const router = express.Router()
const {getGoals,setGoals,putGoals,deleteGoals} = require('../controllers/goalController')
const{protect}= require('../middleware/authmiddleware')
router.get('/', protect , getGoals)

router.post('/', protect , setGoals)

router.put('/:id', protect , putGoals)

router.delete('/:id', protect ,  deleteGoals)




module.exports = router