require('dotenv').config()

const express =  require('express'), cors = require('cors')
const routes = require('./routes/index')

const server =  express()

server.use(cors())
server.use(express.json())
server.use('/v1/api',routes)

server.listen(process.env.NODE_PORT, (err) => {
    if(err){
        return console.log('erro ao iniciar aplicação')
    }
    console.log(`Aplicação rodando no endereço http://localhost:${process.env.NODE_PORT}/${process.env.NODE_HOME}`)
})