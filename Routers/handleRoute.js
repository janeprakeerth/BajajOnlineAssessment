const express = require('express')
const morgan = require('morgan')
const app = express()
const handleController = require('./../Controllers/handleController')

const router = express.Router()

app.use(morgan('dev'))
app.use(express.json())

router.get('/bfhl',handleController.handleget)
router.post('/bfhl',handleController.handlePost)

module.exports = router