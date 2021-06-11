const mongoose=require('mongoose')

const connection=mongoose.connect('mongodb://localhost:27017/blog',{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connected to database')
})
.catch( (err)=>console.log(err))
