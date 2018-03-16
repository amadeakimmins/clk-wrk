const Apparel = require('../models/apparel');

function apparelsIndex(req, res, next) {
  Apparel
    .find()
    .exec()
    .then(apparels => res.json(apparels))
    .catch(next);
}

function apparelsShow(req, res, next) {
  Apparel
    .findById(req.params.id)
    .exec()
    .then((apparel) => {
      if(!apparel) return res.notFound();
      res.json(apparel);
    })
    .catch(next);
}

module.exports = {
  index: apparelsIndex,
  show: apparelsShow
};
