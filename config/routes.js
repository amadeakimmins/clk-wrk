const router = require('express').Router();
const auth = require('../controllers/auth');
const events = require('../controllers/events');
const apparel = require('../controllers/apparels');
// const users = require('../controllers/users');

router.route('/events')
  .get(events.index);
  // .post(secureRoute, events.create);
router.route('/events/:id')
  .get(events.show);
  // .put(secureRoute, events.update)
  // .delete(secureRoute, events.delete)

router.route('/apparel')
  .get(apparel.index);
router.route('/apparel/:id')
  .get(events.show);

  // authentication
router.route('/register')
  .post(auth.register);
router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
