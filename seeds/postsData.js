const {Posts} = require('../models');

const postdata =
[
    {
        "postTitle": "How to add a Github Portfolio Readme?",
        "postContent": "Look it up yourself.",
        "userId": 1
    },
    {
        "postTitle": "How to convert a RESTful API to MERN?",
        "postContent": "Its too long a process to explain here.",
        "userId": 2
    },
    {
        "postTitle": "What can I do after the bootcamp?",
        "postContent": "I'll let you know soon.",
        "userId": 3
    }
];

const seedPosts = () => Posts.bulkCreate(postdata);

module.exports = seedPosts;
