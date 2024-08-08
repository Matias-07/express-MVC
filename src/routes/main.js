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

router.post('/register', listControllers.create)

router.get('/list', listControllers.list)

router.get('/search', listControllers.search)

router.get('/edit/:idUser', listControllers.edit)

router.put('/edit', function(req,res){
    res.send('Estoy en PUT!');
});

router.delete('/delete/:idUser', function(req,res){
    res.send('Viajo por Delete');
})

module.exports = router; 