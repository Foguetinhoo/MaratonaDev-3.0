const express = require('express')
const routesDonor =  express.Router()

const DonorController =  require('../controllers/DonorsController')

routesDonor.get('/donors/all',DonorController.index)
routesDonor.post('/donors/create',DonorController.create)
module.exports =  routesDonor