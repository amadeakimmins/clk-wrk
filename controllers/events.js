const Event = require('../models/event');

function eventsIndex(req, res, next) {
  Event
    .find()
    .exec()
    .then(events => res.json(events))
    .catch(next);
}

function eventsShow(req, res, next) {
  Event
    .findById(req.params.id)
    .exec()
    .then((event) => {
      if(!event) return res.notFound();
      res.json(event);
    })
    .catch(next);
}

module.exports = {
  index: eventsIndex,
  show: eventsShow
};
