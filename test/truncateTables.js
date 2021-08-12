require('dotenv').config()
const { models } = require('../models')

const truncateTables = () =>{
    console.log('Destroying evidence')
    models.Bookmark.destroy({ truncate:true, cascade:true })
}

module.exports = truncateTables