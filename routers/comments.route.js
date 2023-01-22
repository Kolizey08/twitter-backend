const { Router } = require('express')
const { commentaryController } = require('../controllers/comments.controller')

const router = Router()

router.post('/commentary', commentaryController.addCommentary)
router.delete('/commentary/:id', commentaryController.deleteCommentary)
router.get('/commentary', commentaryController.getCommentary)

module.exports = router