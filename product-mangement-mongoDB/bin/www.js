// define the application
const app= require('../app')

const {serverConfiguration} = require('../config').appConfig

app.listen(serverConfiguration.port,()=>{
    console.log("Server is listening in Port", serverConfiguration.port)
})