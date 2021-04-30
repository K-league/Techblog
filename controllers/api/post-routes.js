const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    //get new post
    const body = req.body;
    try {
        const newPost = await Post.create({...body, userId: req.session.userId})
        res.json(newPost);
    } catch (err) {
        res.status(500).json(err)
    }
})
//put route catch is same
router.put('/', withAuth, async (req, res) => {
    //update post
    const body = req.body;
    try {
        const post = await Post.update({...body, userId: req.session.userId})
        res.json(post);
    } catch (err) {
        res.status(500).json(err)
    }
})
//delete route cathc is same
router.delete('/', withAuth, async (req, res) => {
   //delete post
    const body = req.body;
    try {
        const newPost = await Post.delete({...body, userId: req.session.userId})
        res.json(newPost);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router