//Sequelize
require('dotenv').config()
const db = require('./models')
const Bookmark=db['bookmarks']
const Comments=db['comments']
const Users=db['Users']
const Tags=db['Tags']
const bcrypt= require('bcryptjs')
const session = require('express-session')
//Express
const express = require('express')
const methodOverride = require("method-override");
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(session({
    secret: 'My secret',
    resave: false,
    saveUninitialized: true,
  }))
app.get('/home', async (req,res) =>{
    const bookmark = await Bookmark.findAll({ include :{
        all:true
    }})
    const comment = await Comments.findAll({})
    const tags = await Tags.findAll({})
   
    res.render('index',{ bookmark:bookmark, comment:comment, tags:tags })
})

app.get('/', async (req,res) =>{
    res.render('login')
})

app.get('/signup', async(req,res) => {
    const users = await Users.findAll({})
    res.render('signup', {users:users})

})
app.post('/signup', async(req,res) =>{
    const user = await Users.create({
        email:req.body.email,
        passwordHash:bcrypt.hashSync(req.body.passwordHash)
    })
    console.log(user)
    res.redirect('/home')
})

app.get('/signin', async(req,res) => {
    const users = await Users.findAll({})
    res.render('signin', {users:users})
})

app.post('/signin', async(req,res) =>{
    const user = await Users.findOne({ where : {email:req.body.email}})
    if (user && bcrypt.compareSync(req.body.passwordHash, user.passwordHash)){
       req.session.userId = user.id
       res.redirect('/home')
    }else{
        res.render('signin')
    }
    })

app.post('/', async (req,res) =>{
    await Bookmark.create({
        name:req.body.name,
        url:req.body.url  
    })
    res.redirect('/home')
})

app.delete("/bookmark/:id", async (req,res) => {
    await Bookmark.destroy({
        where: {
            id: req.params.id
        }
    })
    res.redirect('/home')
})

app.put("/bookmark/:id", async (req, res) => {
    await Bookmark.update(
            {
                name:req.body.editn,
                url:req.body.editu
            },
            {
                where:{id:req.params.id}
            }
    )
    res.redirect('/home')
})

app.post('/comment/:id' , async (req, res) => {
    
    await Comments.create(
        {
            description:req.body.description,
            bookmarkId:req.params.id
        }
    )
    res.redirect('/home')
})



app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})

