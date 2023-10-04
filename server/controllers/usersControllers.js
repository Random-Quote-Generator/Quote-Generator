
const User = require("../models/User")

module.exports = {
  AddUser: (req, res) => {
    console.log('Attempting to create a user...');
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .then((result) => {
        console.log('User created successfully:', result);
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error('Error creating user:', err);
        res.status(500).send(err);
      });
  },
  
  
};
