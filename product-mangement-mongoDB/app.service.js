const db= require('./db');
const bodyparser= require('body-parser')
const logger= require('./logger')


const api= require('./api/v1')

// include all middleware in a services

const connectToDatabase= ()=>{
    logger.info("Connecting to Database");
    db.createMongoConnection();
    dbConnection= db.getMongoConnection();
}

// set the middleware required for app

const setMiddleWare=(app)=>{
    logger.info("Setting Middleware");
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:false}))
}

// set the application middleware

const apiSetUp=(app)=>{
    logger.info("Setting API");
    app.use('/api/v1/', api);
}


module.exports={
    connectToDatabase,
    setMiddleWare,
    apiSetUp
}