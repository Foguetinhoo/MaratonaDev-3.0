require('dotenv').config()

const {Pool} =  require('pg')

const db =  new Pool({
    host:process.env.POST_HOST,
    user:process.env.POST_USER,
    password:process.env.POST_PASSWORD,
    database:process.env.POST_DB,
    port:process.env.POST_PORT,
    max:18000
})
module.exports = db