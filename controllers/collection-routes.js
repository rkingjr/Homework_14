const router = require('express').Router();
const {Posts,Users} = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Posts.findAll({
            where:{"userId": req.session.userId},
            include: [Users]
        });
        const posts = postData.map((posts) => posts.get({ plain: true }));
    console.log(posts);
        res.render('all-posts', {
            layout: 'collection',
            posts,
        });
    } catch (err) {
        res.redirect('login');
    }
});

router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
        layout: 'collection',
    });
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        if (postData) {
            const post = postData.get({ plain: true });
            console.log(post);
            res.render('edit-post', {
                layout: 'collection',
                posts,
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;
