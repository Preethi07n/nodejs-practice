const router=  require('express').Router();

router.use('/productManager', require('./productManager'));

module.exports= router