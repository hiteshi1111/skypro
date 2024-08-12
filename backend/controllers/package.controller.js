const express = require('express');
const router = express.Router();
const PackageService = require('../services/package.service')

router.get('/', (req,res) => {
    PackageService.getPackages().then((response) => {
        res.status(200).send(response)
    }).catch((error) => {
        res.status(500).send({ error: 'Something went wrong. Try again later!' })
    })
})

module.exports = router;