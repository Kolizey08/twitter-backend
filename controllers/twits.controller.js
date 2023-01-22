const Twit = require('../models/Twit.model')

module.exports.twitController = {
    addTwit: (req, res)=> {
        Twit.create({
            twit: req.body.twit,
            user: req.body.user,
        }).then((data)=> {
            res.json(data)
        }).catch(()=> res.json('error'))
    },
    deleteTwit: (req, res) => {
        Twit.findByIdAndDelete(req.params.id)
          .then(() => {
            res.json("Twit удален");
          })
          .catch(() => res.json("error"));
      },
      getTwit: (req, res)=> {
        Twit.find().populate('user like').then((data)=> {
            res.json(data)
        }).catch(()=> res.json('error'))
      },
      updateTwit: (req, res)=> {
        Twit.findByIdAndUpdate(req.params.id,{
            twit: req.body.twit,
            user: req.body.user,
            $push: {like: req.body.like}
        }).then((data)=> {
            res.json(data)
        }).catch(()=> res.json('error'))
    },
}