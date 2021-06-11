const express=require('express')
const app=express()
require('./db/db')
const route=require('./routes/blogRoute')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')
app.use('/',route)

app.listen(5000,()=>{
    console.log('server started at http://localhost:5000')
})