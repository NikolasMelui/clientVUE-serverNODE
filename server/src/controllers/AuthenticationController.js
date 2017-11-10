// const mail = require('../mail'),
const {User} = require('../models');

module.exports = {
  register (req, res) {
    try {
      const user = User.create(req.body);
      // let successfulMessage = 'Your user was registered.';
      // res.send({
      //   message: `Hello ${req.body.email}. ${successfulMessage}`,
      //   seccessfulMessage: successfulMessage
      // });
      res.send(user.toJSON());
      // let mailRecipient = req.body.email,
      //     mailSubject = 'Success registration.',
      //     mailText = `Your user ${req.body.email} was successfully registered.`;
      // mail(mailRecipient, mailSubject, mailText);
    } catch (err) {
      res.status(400).send({
        error: 'This email is already in use.'
      });
    }
  }
};
