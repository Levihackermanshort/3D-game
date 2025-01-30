const assignI18nPackMiddleware = pack => (req, res, next) => {
  res.locals.i18n = {
    lang: 'en', // Force English as the default language
    pack,
  };

  next();
};

export default assignI18nPackMiddleware;
