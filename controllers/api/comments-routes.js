const router = require('express').Router();
const {Comments} = require('../../models/');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try{
        const commentData = await Comments.findAll({
            include: [Users],
        });
        const comments = commentData.map((comments) => comments.get({ plain: true }));

    console.log(comments);

    res.render('single-post', {comments, loggedIn: req.session.loggedIn});
} catch(err) {
    res.status(500).json(err);
}
});

router.post('/', withAuth, async (req, res) => {
    const body = req.body;

    try {
        const newComment = await Comments.create({
            ...body,
        userId: req.session.userId,
    });
        res.json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
