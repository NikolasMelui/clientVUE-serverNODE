const mail = require('./mail'),
      express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      morgan = require('morgan');

// ROUTES
const index = require('./routes/index'),
      register = require('./routes/register'),
      about = require('./routes/about'),
      cooperation = require('./routes/cooperation'),
      events = require('./routes/events'),
      reports = require('./routes/reports');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
  let successfulMessage = 'Your user was registered.';
  res.send({
    message: `Hello ${req.body.email}. ${successfulMessage}`,
    seccessfulMessage: successfulMessage
  });
  let mailRecipient = req.body.email;
  let mailSubject = 'Success registration.';
  let mailText = `Your user ${req.body.email} was successfully registered.`;
  mail(mailRecipient, mailSubject, mailText);
});

app.listen(process.env.port || 8081);
