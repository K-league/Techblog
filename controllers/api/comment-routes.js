const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/',withAuth, async (req, res) => {
    //get new comment
    try {
        const newComment = await Comment.create({
            ...req.body,
            userId: req.session.userId
        })
    } catch (err) {
        res.status(500).json(err)
    }
});



module.exports = router