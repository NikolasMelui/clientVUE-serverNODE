const mail = require('./mail');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
  let seccessfulMessage = 'Your user was registered.';
  res.send({
    message: `Hello ${req.body.email}. ${seccessfulMessage}`,
    seccessfulMessage: seccessfulMessage
  });
  let mailRecipient = req.body.email;
  let mailSubject = 'Success registration.';
  let mailText = `Your user ${req.body.email} was successfully registered.`;
  mail(mailRecipient, mailSubject, mailText);
});

app.listen(process.env.port || 8081);
