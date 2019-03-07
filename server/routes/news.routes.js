const express = require('express');
const router = express.Router();

const newsCtrl = require('../controllers/news.controller');

router.get('/', newsCtrl.getNews);
router.delete('/:id', newsCtrl.deleteNews);

module.exports = router;