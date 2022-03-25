const express = require('express');
const router = express.Router();

router.use(express.json());

const controller = require('../controllers/UrlsController');

router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

module.exports = router;
