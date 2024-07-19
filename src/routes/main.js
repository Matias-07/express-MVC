let express = require('express'); 

let router = express.Router(); 

router.get('/', function (req,res) {
    res.render('index'); 
}); 

router.get('/contacto', function(req,res) {
    res.send('Dejanos tu contacto')
});

module.exports = router; 
