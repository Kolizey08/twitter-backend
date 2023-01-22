const Commentary = require('../models/Commentary.model')

module.exports.commentaryController = {
    addCommentary: (req, res)=> {
        Commentary.create({
            text: req.body.text,
            user: req.body.user,
            twit: req.body.twit
        }).then((data)=> {
            res.json(data)
        }).catch(()=> res.json('error'))
    },
    deleteCommentary: (req, res) => {
        Commentary.findByIdAndDelete(req.params.id)
          .then(() => {
            res.json("комментария удалена");
          })
          .catch(() => res.json("error"));
      },
      getCommentary: (req, res)=> {
        Commentary.find().populate('user twit').then((data)=> {
            res.json(data)
        }).catch(()=> res.json('error'))
      }
}