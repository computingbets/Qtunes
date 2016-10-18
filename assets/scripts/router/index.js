'use strict';

const Router5 = require('router5').default;
const loggerPlugin = require('router5').loggerPlugin();
const historyPlugin = require('router5-history').default();

const routes = [
  {name: 'index', path: '/'},
  {name: 'about', path: '/about'},
  {name: 'games', path: '/games'},
  {name: 'fav', path: '/fav'},
];

const options = {
  useHash: true,
  hashPrefix: '!',
  defaultRoute: '/',
};

const router = new Router5(routes, options)
.usePlugin(loggerPlugin)
.usePlugin(historyPlugin);

module.exports = router;
