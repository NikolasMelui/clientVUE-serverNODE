// const mail = require('../mail'),
const {User} = require('../models'),
      Sequelize = require('sequelize');

module.exports = {
  singup (req, res) {
    User.create(req.body)
    // let successfulMessage = 'Your user was registered.';
    // res.send({
    //   message: `Hello ${req.body.email}. ${successfulMessage}`,
    //   seccessfulMessage: successfulMessage
    // });
    // res.send(req.body);
    // let mailRecipient = req.body.email,
    //     mailSubject = 'Success registration.',
    //     mailText = `Your user ${req.body.email} was successfully registered.`;
    // mail(mailRecipient, mailSubject, mailText);
      .catch(Sequelize.ValidationError, function (err) {
        res.status(400).send({
          error: 'Пользователь с таким E-mail уже зарегистрирован'
        });
      });
  },
  singin (req, res) {
    try {
      // const {email, password} = req.body;
      // const user = User.findOne({
      //   where: {
      //     email: email
      //   }
      // });
      // if (!user) {
      //   return res.status(403).send({
      //     error: 'The login info was incorrect.'
      //   });
      // }
      res.send(req.body);
    } catch (err) {
      console.log(err);
      res.send(req);
      // res.status(400).send({
      //   error: 'Пользователь с таким E-mail уже зарегистрирован'
      // });
    }
  }
};
