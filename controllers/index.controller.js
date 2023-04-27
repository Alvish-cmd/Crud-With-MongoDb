const express = require('express');
const Userdb = require('../models/model')
const Servicedb = require('../models/serviceModel')
const moment = require('moment');
exports.list = async (req, res, next) => {
    const data = await Userdb.find()
    const Dob = moment(data.Dob).format('YYYY-MM-DD')
    
    res.render('list', { user: data});
    
  };

exports.getAddUser = function (req, res, next) {
  res.render('form', { title: 'Add User' });
}

exports.create = async(req, res) => {
  try {
  const image = req.file;
  const file = req.file;
    const user = new Userdb({
      name: req.body.name,
      email: req.body.email,
      number:req.body.number,
      Dob:req.body.Dob,
      password:req.body.password,
      image:image.filename,
      file:file.filename,
      country:req.body.country,
      address:req.body.address,
    })
   await user.save()
        // console.log(user);
        res.redirect('/')
        // res.json(user)

  } catch (error) {
    console.log(error);
  }
}

exports.editUser = async(req, res) => {

  try {
    if (req.query.id) {
      const id = req.query.id
     const data = await Userdb.findById(id)
     const Dob = moment(data.Dob).format('YYYY-MM-DD')
          if (!data) {
            res.status(404).send({ message: "No found user with id" + id })
          }
          else {
            res.render('editUser', 
            { 
              user: data,
              Dob:Dob
            })
          }
        }   
  } catch (error) {
    console.log(error);
  }

}

exports.update = async (req, res) => {
  

  
  try {
    const _id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    const Dob = req.body.Dob;
    const image = req.body.filename;
    const password = req.body.password;
    const country = req.body.country;
    const address = req.body.address;
    

   const data = await Userdb.findByIdAndUpdate
   (
     {
       _id:_id
      },
      {
        $set:
        {
          name:name,
          email:email,
          number:number,
          Dob:Dob,
          password:password,
          country:country,
          address:address,
          // image:image[0]
        }
      }
      )
      console.log(data);
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



exports.serviceAdd = async (req, res, next)=> {
  const data = await Userdb.find()
  res.render('service',
  {
    users:data
  });
}

exports.serviceCreate = async(req, res) => {
  try {
    const service = new Servicedb({
      customer:req.body.name,
      vehical_number: req.body.vehical_number,
      pickup_date:req.body.pickup_date,
      drop_date:req.body.drop_date,
      location:req.body.location,
      service_price:req.body.service_price,
      payble_amount:req.body.payble_amount,
      modelId:req.body.Customer_name
    })
    await service.save()
        res.redirect('/serviceList')
  } catch (error) {
    console.log(error);
  }
}
exports.serviceList = async (req, res, next) => {
  const data = await Servicedb.find().populate('modelId')
  res.render('serviceList', { user: data });
};

exports.serviceEdit = async(req, res) => {
  try {
    if (req.query.id) {
      const id = req.query.id
      const data = await Servicedb.findById(id).populate('modelId')
      const drop_date = moment(data.drop_date).format('YYYY-MM-DD')
      const pickup_date = moment(data.pickup_date).format('YYYY-MM-DD')
          if (!data) {
            res.status(404).send({ message: "No found user with id" + id })
          }
          else {
            res.render('editService', { user: data,drop_date:drop_date,pickup_date:pickup_date})
          }
        }   
  } catch (error) {
    console.log(error);
  }

}

exports.updateService = async (req, res) => {
  
  
  try {
    const drop_date=req.body.drop_date
    const pickup_date=req.body.pickup_date
    const vehical_number= req.body.vehical_number
      const location=req.body.location
      const service_price=req.body.service_price
      const payble_amount=req.body.payble_amount
    const id = req.body.service_id;
    const data = await Servicedb.findById(id);

   const savedData =  await Servicedb.findByIdAndUpdate(
      {
        _id:id
      },{
        $set:{vehical_number:vehical_number,pickup_date:pickup_date,drop_date:drop_date,location:location,service_price:service_price,payble_amount:payble_amount}})
       
    res.redirect('/servicelist')

  } catch (error) {

    res.status(211).json({ message: "Error update user information" })

  }

}

exports.deleteService = async (req, res) => {

  try {
    const id = req.query.id
    const data = await Servicedb.findByIdAndDelete(id)
    res.redirect('/serviceList')

  } catch (error) {
    console.log(error);
  }
}

