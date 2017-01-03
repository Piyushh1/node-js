var express = require('express'),
  router = express.Router();

router.post('/formdata', function(req, res) {
    console.log(req.body);
    console.log("You sent the email " + req.body.email + " and the password " + req.body.password);
    res.send("ok");
});

module.exports = router;