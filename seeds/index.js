const sequelize = require('../config/connections');
const seedUsers = require('./usersData');
const seedPosts = require('./postsData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    process.exit(0);
};

seedAll();
