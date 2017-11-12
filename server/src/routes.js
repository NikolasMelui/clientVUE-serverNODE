const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

module.exports = (app) => {
  app.post('/singup',
    AuthenticationControllerPolicy.singup,
    AuthenticationController.singup);
    
  app.post('/singin',
    AuthenticationController.singin);
};
