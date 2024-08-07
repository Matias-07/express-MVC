let express = require('express'); 
let listControllers = require ('../controllers/listController.js')

let router = express.Router(); 

router.get('/', function (req,res) {
    res.render('index'); 
}); 

router.get('/contacto', function(req,res) {
    res.send('Dejanos tu contacto')
});

router.get('/register', function (req,res) {
    res.render('register'); 
}); 

router.get('/list', listControllers.list)

router.get('/search', listControllers.search)

module.exports = router; 