const nodemailer = require('nodemailer'),
      config = require('../config/config');

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: config.mailSender.user,
    pass: config.mailSender.pass
  },
  tls: {
    rejectUnauthorized: false
  }
});

function sendMail (recipient, subject, text) {
  let HelperOptions = {
    from: '"Nikolas Melui" <nikolasmelui@gmail.com>',
    to: recipient,
    subject: subject,
    text: text
  };
  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('The message was sent');
    console.log(info);
  });
}

module.exports = sendMail;
