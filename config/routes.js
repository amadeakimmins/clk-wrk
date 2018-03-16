const router = require('express').Router();

router.route('/events')
  .get(events.index);
  // .post(secureRoute, events.create);
router.route('/events/:id')
  .get(events.show);
  // .put(secureRoute, events.update)
  // .delete(secureRoute, events.delete)

  // authentication
router.route('/register')
  .post(auth.register);
router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
