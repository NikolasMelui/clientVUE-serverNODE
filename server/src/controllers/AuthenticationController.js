const mail = require('../mail'),
      jwt = require('jsonwebtoken'),
      Sequelize = require('sequelize'),
      config = require('../config/config'),
      {User} = require('../models');

function jwtSingUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sing(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  });
}

module.exports = {
  singup (req, res) {
    User.create(req.body)
      .then(() => {
        res.send({
          seccessfulMessage: 'Вы были успешно зарегистрированы.'
        });
        let mailRecipient = req.body.email,
            mailSubject = 'Регистрация на сайте Samara IT Community',
            mailText = `
                        Вы были успешно зарегистрированы.
                        Логин - ${req.body.email}.
                        Пароль - ${req.body.password}
                       `;
        mail(mailRecipient, mailSubject, mailText);
      })
      .catch(Sequelize.UniqueConstraintError, (err) => {
        res.status(400).send({
          error: 'Пользователь с таким E-mail уже зарегистрирован'
        });
      });
  },
  singin (req, res) {
    const {email, password} = req.body;
    console.log(req.body);
    const i = User.findOne({
      where: {
        email: email
      }
    })
      .then((response) => {
        const user = response;
        if (!user) {
          return res.status(403).send({
            error: 'The login info was incorrect.'
          });
        }
        if (user.password != password) {
          return res.status(403).send({
            error: 'Wrong login or password.'
          });
        }
        const userJson = user.toJSON();
        console.log(userJson);
        res.send({
          user: userJson
        });
      })
      .catch(() => {
        console.log(i);
        res.status(500).send({
          error: 'Login error.'
        });
      });
  }
};
