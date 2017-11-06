const mail = require('./mail');

module.exports = (app) => {
  app.post('/register', (req, res) => {
    let successfulMessage = 'Your user was registered.';
    res.send({
      message: `Hello ${req.body.email}. ${successfulMessage}`,
      seccessfulMessage: successfulMessage
    });
    let mailRecipient = req.body.email,
        mailSubject = 'Success registration.',
        mailText = `Your user ${req.body.email} was successfully registered.`;
    mail(mailRecipient, mailSubject, mailText);
  });
};
