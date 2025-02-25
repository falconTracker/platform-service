/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/home.js')(app);
  require('./router/api.js')(app);
  require('./router/web/web')(app);
  require('./router/web/api')(app);
};
