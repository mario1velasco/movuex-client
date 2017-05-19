import express from 'express'
import api from './api'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/movuex')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', api)

app.listen(3000, () => console.log('server listen to port 3000'))
