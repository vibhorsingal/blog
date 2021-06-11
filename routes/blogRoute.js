const route=require('express').Router()
const postController=require('../controllers/postControllers')

route.get('/',postController.homePage)
route.get('/create',postController.showCreatePost)
route.post('/create',postController.createPost)
route.get('/delete/:bId',postController.deletePost)
route.post('/update/:bId',postController.updatePost)
route.get('/update/:bId',postController.showUpdatePage)
module.exports=route