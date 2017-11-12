const mail = require('../mail'),
      Sequelize = require('sequelize'),
      {User} = require('../models');

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
    const user = User.findOne({
      where: {
        email: email
      }
    })
      .then(() => {
        if (!user) {
          return res.status(403).send({
            error: 'The login info was incorrect.'
          });
        }
      })
      .catch(Sequelize.UniqueConstraintError, (err) => {
        res.status(400).send({
          error: 'Пользователь с таким E-mail уже зарегистрирован'
        });
      });
  }
};
