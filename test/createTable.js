require('dotenv').config()
const { models } = require('../models')

const createTables = () =>{
    console.log('creating table')
    // something in here
    models.Bookmark.create({
        name:"Regin",
        url:"Maru"
        
    })
}

module.exports = createTables