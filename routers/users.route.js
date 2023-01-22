const { Router } = require('express')
const { userController } = require('../controllers/users.controller')

const router = Router()

router.post('/user', userController.addUser)
router.delete('/user/:id', userController.deleteUser)
router.get('/user', userController.getUser)
router.patch('/user/save/:id', userController.updateUser)

module.exports = router