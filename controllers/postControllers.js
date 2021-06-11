const Blog=require('../model/blog')

module.exports.homePage= async(req,res)=>{
    try{
        const blogs=await Blog.find({}).sort('-createdAt')
        res.render('home',{
            blogs:blogs
        })
    }
    catch(err){
        console.log(err)
    }
}

module.exports.showCreatePost=(req,res)=>{
    res.render('createPost')
}

//creating new blog
module.exports.createPost=async (req,res)=>{
    try{
        const newBlog=await Blog.create(req.body)
        res.redirect('/')
    }
    catch(err){
        console.log(err)
    }
}

//geting a blog by id
module.exports.readById=async (req,res)=>{
    try{
        const blog=await Blog.findById(req.params.id)
        res.status(200).json(blog)
    }
    catch(err){
        console.log(err)
    }
}

//deleting a single blog by id
module.exports.deletePost=async(req,res)=>{
    try{
        const blog=await Blog.deleteOne({id:req.params.id})
        res.redirect('/')
    }
    catch(err){
        console.log(err)
    }
}
//show update page
module.exports.showUpdatePage=async (req,res)=>{
    const blog=await Blog.findById(req.params.bId)
    res.render('update',{
        blog:blog
    })
}
//update a post
module.exports.updatePost=async (req,res)=>{
    try{
        const beforeUpdateBlog=await Blog.findByIdAndUpdate(req.params.bId,req.body)
        res.redirect('/')
    }
    catch(err){
        console.log(err)
    }
}