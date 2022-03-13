const router = require('express').Router();

const {
  createShortUrl,
  getOneShortUrl,
  home,
} = require('../controllers/shortUrl.controllers');

router.post('/shortUrl', createShortUrl);
router.get('/:shortUrl', getOneShortUrl);
router.get('/', home);

module.exports = router;
