const mongoose = require('mongoose');
const { db, env } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(db[env]);

const User = require('../models/user');
const Event = require('../models/event');

User.collection.drop();
Event.collection.drop();

User
  .create([{
    fullname: 'Sam Matanle',
    username: 'sam.matanle',
    email: 'sam.matanle@hotmail.co.uk',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then(users => {
    console.log(`${users.length} users created!`);

  return Event
    .create([{
      name: "CLK:WRK",
      date: "02/04/2018",
      description: "best event ever",
      ticketLink: "http://www.tickets.com",
      ticketPrices: 10.99,
      image: "http://www.image.come",
    }]);
  })
  .then((brand) => {
    console.log(`${brand.length} brands created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
