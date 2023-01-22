const { Router } = require('express')
const { twitController } = require('../controllers/twits.controller')

const router = Router()

router.post('/twit', twitController.addTwit)
router.delete('/twit/:id', twitController.deleteTwit)
router.get('/twit', twitController.getTwit)
router.patch('/twit/:id', twitController.updateTwit)

module.exports = router