const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

const SCREENSHOT_PATH = '/pictures'

router.get('/screenshots', (req, res, next) => {

    let dat = fs.readdirSync('static' + SCREENSHOT_PATH)
      .filter(file => { return file.startsWith('Screenshot') })
      .map(file => { return { src: path.join(SCREENSHOT_PATH, file) } })

    let ret = JSON.stringify(dat)
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(ret)
})
module.exports = router
