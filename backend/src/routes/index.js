const express = require('express')
const routes =  express.Router()
const routesDonor = require('./routDonors')
const routesAdm = require('./routesAdm')




module.exports = routes.use([routesDonor,routesAdm])