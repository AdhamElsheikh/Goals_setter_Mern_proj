const express = require ('express')
const router = express.Router()
const {registerUser,loginUser,display} = require('../controllers/userController')
const{protect}= require('../middleware/authmiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get ('/display', protect , display)








module.exports = router