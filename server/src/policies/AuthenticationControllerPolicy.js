const Joi = require('joi');

module.exports = {
  singup (req, res, next) {
    const schema = {
      username: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    };

    const {error} = Joi.validate(req.body, schema);

    if (error) {
      switch (error.details[0].context.key) { // Invalid username!!!
      case 'username':
        res.status(400).send({
          error: `You must provide a valid username adress.`
        });
        break;
      case 'email':
        res.status(400).send({
          error: `You must provide a valid email adress.`
        });
        break;
      case 'password':
        res.status(400).send({
          error: `The password provided failed to match the following rules.`
        });
        break;
      default:
        res.status(400).send({
          error: 'Invalid registration information'
        });
      }
    } else {
      next();
    }
  }
};
