let express = require('express'); 
let rutasProductos = require('./routes/productos.js');
let rutasMain = require ('./routes/main.js');    
let methodOverride = require('method-override');


let app = express(); 

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../public'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(methodOverride('_method'));

app.listen(3000, () => console.log('el servidor funciona!'));

app.use('/productos',rutasProductos); 
app.use('/', rutasMain);

app.use((req,res,next) => {
    res.status(404).render('not-found')
})