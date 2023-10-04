
const router=require("express").Router()
const {AddPost , getAllPostsWhereUserId , getAllPosts}=require("../controllers/postsControllers")


router.post("/Add",AddPost)
router.get("/getAll/:userId", getAllPostsWhereUserId)
router.get("/getAll", getAllPosts)


module.exports=router