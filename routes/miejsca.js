const express = require('express')
const router = express.Router()

module.exports = router

router.get('/', (req, res) =>
{
    res.send('Miejsca w kinie:')
})