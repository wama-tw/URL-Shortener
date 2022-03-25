const express = require('express');
const router = express.Router();

router.use(express.json());

const controller = require('../controllers/RedirectController');

router.get('/:id', controller.get);


module.exports = router;