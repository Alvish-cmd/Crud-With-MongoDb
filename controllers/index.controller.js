const Userdb = require('../models/model')

exports.list = async (req, res, next) => {
    const data = await Userdb.find()
    res.render('list', { user: data });
    
  };

exports.getAddUser = function (req, res, next) {
  res.render('form', { title: 'Add User' });
}

exports.create = async(req, res) => {
  try {
    const user = new Userdb({
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      status: req.body.status
    })
   await user.save(user)
        res.redirect('/')

  } catch (error) {
    console.log(error);
  }
}

exports.editUser = async(req, res) => {
  try {
    if (req.query.id) {
      const id = req.query.id
     const data = await Userdb.findById(id)
          if (!data) {
            res.status(404).send({ message: "No found user with id" + id })
          }
          else {
            res.render('editUser', { user: data })
          }
        }   
  } catch (error) {
    console.log(error);
  }

}

exports.update = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const gender = req.body.gender;
    const status = req.body.status;
    const id = req.body.id;
    await Userdb.findByIdAndUpdate({_id:id},{$set:{name:name,email:email,gender:gender,status:status}})
    res.redirect('/')

  } catch (error) {

    res.status(500).send({ message: "Error update user information" })

  }

}

exports.delete = async (req, res) => {

  try {
    const id = req.query.id
    const data = await Userdb.findByIdAndDelete(id)
    res.redirect('/')

  } catch (error) {
    console.log(error);
  }
}

