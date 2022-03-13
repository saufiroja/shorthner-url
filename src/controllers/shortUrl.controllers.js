const { ShortUrl } = require('../database/models');

const home = async (req, res, next) => {
  try {
    const shortUrls = await ShortUrl.findAll();
    return res.render('index', { shortUrls });
  } catch (error) {
    next(error);
  }
};

const createShortUrl = async (req, res, next) => {
  try {
    const { full } = req.body;
    await ShortUrl.create({
      full,
    });

    res.redirect('/');
  } catch (error) {
    next(error);
  }
};

const getOneShortUrl = async (req, res, next) => {
  try {
    const short = req.params.shortUrl;
    const shortUrl = await ShortUrl.findOne({ where: { short } });

    if (shortUrl == null) {
      return res.status(404).json({
        message: 'url not found',
      });
    }

    shortUrl.clicks++;
    shortUrl.save();

    res.redirect(shortUrl.full);
  } catch (error) {
    next(error);
  }
};

module.exports = { createShortUrl, getOneShortUrl, home };
