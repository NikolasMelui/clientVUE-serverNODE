const express = require('express'),
      router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Samara IT Community - MainPage' });
});

module.exports = router;