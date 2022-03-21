const {Users} = require('../models');

const userdata =
[
    {
        "username": "rkingjr",
        "password": "password"
    },
    {
        "username": "txu2king",
        "password": "password"
    },
    {
        "username": "rgfenimore1969",
        "password": "password"
    }
];

const seedUsers = () => Users.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;
