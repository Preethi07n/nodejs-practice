
const express=  require('express');
// include app services
const appService= require('./app.service');

const app = express();

appService.connectToDatabase();
appService.setMiddleWare(app);
appService.apiSetUp(app);

module.exports = app