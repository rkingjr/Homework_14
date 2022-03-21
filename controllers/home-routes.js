const router = require('express').Router();
const {Posts,Comments,Users} = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Posts.findAll({
            include: [Users],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('all-posts-admin', {posts,loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Posts.findOne({
            where: {id: req.params.id},
            include: [
                Users,
                {
                    model: Comments,
                    include: [Users],
                },
            ],
        });
        if (postData) {
            const post = postData.get({plain: true});
            console.log(post);
            res.render('single-post', { posts, loggedIn: req.session.loggedIn});
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signup');
});

module.exports = router;
