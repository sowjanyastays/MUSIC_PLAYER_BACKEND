const express = require('express')
const router = express.Router()
const {getAllSongsWithThumbnails, getFileByName, uploadFile} = require('../controllers/musicPlayer')
const fileUpload = require('../middleware/musicPlayer')

router.route('/').get(getAllSongsWithThumbnails)

router.route('/assets/:filename').get(getFileByName)

router.route('/upload').post(fileUpload.single('file'),uploadFile)

module.exports = router