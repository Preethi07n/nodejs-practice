const mongoose = require('mongoose')

const { dbConfig } = require('../config').appConfig

function createMongoConnection(){
    mongoose.connect(dbConfig.mongoDbUrl)
}

function getMongoConnection(){
    return mongoose.connection;
}

module.exports= {
    createMongoConnection,
    getMongoConnection
}