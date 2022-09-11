const router = require("express").Router();
const Post = require("../models/Post.js");
const User = require("../models/User.js");

//create a post
router.post("/", async (req, res)=>{
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

//update a post
router.put("/:id", async(req, res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("Post has been updated");
        }else{
            res.status(403).json("You can only change your Post");
        }
    } catch (error) {
        res.status(500).json(error);
    }
    
});

//delete a post
router.delete("/:id", async(req, res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("Post has been deleted");
        }else{
            res.status(403).json("You can only delete your Post");
        }
    } catch (error) {
        res.status(500).json(error);
    }
    
});

//like a post
router.put("/:id/like", async(req, res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("Post liked!!");
        }else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("Post unliked!!");
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

//get a post
router.get("/:id", async(req, res)=>{
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
    
});

//get timeline post
router.get("/timeline/:userId", async(req, res)=>{
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({userId:currentUser._id});
        const friendsPosts = await Promise.all(
            currentUser.following.map(friendsId=>{
                return Post.find({userId:friendsId});
            })
        );
        res.json(userPosts.concat(...friendsPosts));
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;