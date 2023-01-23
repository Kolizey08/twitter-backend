const User = require("../models/User.model");

module.exports.userController = {
  addUser: (req, res) => {
    User.create({ name: req.body.name })
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json("error"));
  },
  deleteUser: (req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json("пользователь удален");
      })
      .catch(() => res.json("error"));
  },
  getUser: (req, res)=> {
    User.find().populate('save').then((data)=> {
        res.json(data)
    }).catch(()=> res.json('error'))
  },
  updateUser: (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        $push: {save: req.body.save}
    }).then((data)=> {
      res.json(data)
    }).catch((err)=> res.json(err))
  }
};
